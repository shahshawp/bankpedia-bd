const User = require("../models/user.model");
const bcrypt = require("bcrypt");

const registerUser = async (req, res, next) => {
	try {
		const { name, email, password, role } = req.body;
		if (!name || !email || !password) {
			return res.status(404).json({ message: "Input error" });
		}
		let user = await User.findOne({ email });

		if (user) {
			return res
				.status(400)
				.json({ message: "User already exits. Please Login" });
		}
		user = new User({ name, email, password, role });

		const salt = await bcrypt.genSalt(10);
		const hashPassword = await bcrypt.hash(password, salt);
		user.password = hashPassword;
		await user.save();

		return res.status(201).json({ message: "User registered successfully." });
	} catch (err) {
		console.log(err);
		next(err);
	}
};

const loginUser = async (req, res) => {
	try {
		const { email, password } = req.body;
		if (!email || !password) {
			return res.status(404).json({ message: "Input error" });
		}
		let user = await User.findOne({ email });
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}
		const match = await bcrypt.compare(password, user.password);
		if (match) {
			res.status(200).json(user);
		}
		res.status(404).json({ message: "Incorrect username/password" });
	} catch (err) {
		console.log(err);
		next(err);
	}
};

module.exports = { registerUser, loginUser };
