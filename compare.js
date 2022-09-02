import React from "react";
//import comparedemo from "../public/images/compare.png";
import Footer from "../components/Footer";

const Compare = () => {
	return (
		<div className="w-full py-2 bg-gradient-to-t from-sky-800 via-cyan-800 to-teal-600">
			<h4 className="text-4xl py-5 font-bold font-sans text-center text-black">
				<span>Comparison</span>
			</h4>

			<p className="text-lg text-center font-sans text-white font-bold bg-gradient-to-t from-sky-900 via-cyan-900 to-teal-800">
				Almost every banks in Bangladesh provide various types of home loans or
				credit facilities for helping to make their clients' life easy and
				simple. They offer many attractive facilities to help the customers
				against minimum interest of charges. All available offers are listed
				alphabetically by their names in the table below. Click the provider
				names to learn detail information about the offer and choose the best
				one to make your dream comes true.<br></br> There are 26 records found
				in database and values are displaying in the following table based on
				maximum limit of loan amount and maximum number of tenure. To learn
				more, please contact the provider.
			</p>
			<div className="w-full py-5 px-20 items-center text-center bg-gradient-to-t from-sky-800 via-white to-gray-600">
				<table className="W-full items-center text-center border-collapse border border-slate-500 ... font-bold ">
					<thead>
						<tr>
							<th class="no-line">#</th>
							<th class="no-line">Loan Provider</th>
							<th class="no-line">Interest Rate</th>
							<th class="no-line">Monthly Installment (EMI)</th>
							<th class="no-line">Total Payable Interest</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="no-line">1</td>
							<td class="no-line">NCC Bank</td>
							<td class="no-line">8.99 %</td>
							<td class="no-line">
								৳ 50,684<span class="small">.00</span>
							</td>
							<td class="no-line">
								৳ 4,123,120<span class="small">.00</span>
							</td>
						</tr>
						<tr>
							<td class="no-line">2</td>
							<td class="no-line">Dutch-Bangla Bank</td>
							<td class="no-line">9.00 %</td>
							<td class="no-line">
								৳ 100,704<span class="small">.00</span>
							</td>
							<td class="no-line">
								৳ 18,211,200<span class="small">.00</span>
							</td>
						</tr>
						<tr>
							<td class="no-line">3</td>
							<td class="no-line">Trust Bank</td>
							<td class="no-line">9.00 %</td>
							<td class="no-line">
								৳ 100,704<span class="small">.00</span>
							</td>
							<td class="no-line">
								৳ 18,211,200<span class="small">.00</span>
							</td>
						</tr>
						<tr>
							<td class="no-line">4</td>
							<td class="no-line">BRAC Bank</td>
							<td class="no-line">9.50 %</td>
							<td class="no-line">
								৳ 111,856<span class="small">.00</span>
							</td>
							<td class="no-line">
								৳ 14,845,440<span class="small">.00</span>
							</td>
						</tr>
						<tr>
							<td class="no-line">5</td>
							<td class="no-line">Commercial Bank of Ceylon</td>
							<td class="no-line">9.50 %</td>
							<td class="no-line">
								৳ 93,213<span class="small">.00</span>
							</td>
							<td class="no-line">
								৳ 12,371,120<span class="small">.00</span>
							</td>
						</tr>
						<tr>
							<td class="no-line">6</td>
							<td class="no-line">Standard Chartered Bank</td>
							<td class="no-line">9.50 %</td>
							<td class="no-line">
								৳ 104,844<span class="small">.00</span>
							</td>
							<td class="no-line">
								৳ 19,453,200<span class="small">.00</span>
							</td>
						</tr>
						<tr>
							<td class="no-line">7</td>
							<td class="no-line">United Commercial Bank</td>
							<td class="no-line">9.50 %</td>
							<td class="no-line">
								৳ 129,398<span class="small">.00</span>
							</td>
							<td class="no-line">
								৳ 5,527,760<span class="small">.00</span>
							</td>
						</tr>
						<tr>
							<td class="no-line">8</td>
							<td class="no-line">One Bank</td>
							<td class="no-line">9.99 %</td>
							<td class="no-line">
								৳ 108,960<span class="small">.00</span>
							</td>
							<td class="no-line">
								৳ 20,688,000<span class="small">.00</span>
							</td>
						</tr>
						<tr>
							<td class="no-line">9</td>
							<td class="no-line">Mutual Trust Bank</td>
							<td class="no-line">10.00 %</td>
							<td class="no-line">
								৳ 109,044<span class="small">.00</span>
							</td>
							<td class="no-line">
								৳ 20,713,200<span class="small">.00</span>
							</td>
						</tr>
						<tr>
							<td class="no-line">10</td>
							<td class="no-line">Bank Asia</td>
							<td class="no-line">10.50 %</td>
							<td class="no-line">
								৳ 113,302<span class="small">.00</span>
							</td>
							<td class="no-line">
								৳ 21,990,600<span class="small">.00</span>
							</td>
						</tr>
						<tr>
							<td class="no-line">11</td>
							<td class="no-line">Dhaka Bank</td>
							<td class="no-line">10.50 %</td>
							<td class="no-line">
								৳ 132,648<span class="small">.00</span>
							</td>
							<td class="no-line">
								৳ 11,876,640<span class="small">.00</span>
							</td>
						</tr>
						<tr>
							<td class="no-line">12</td>
							<td class="no-line">Eastern Bank</td>
							<td class="no-line">10.50 %</td>
							<td class="no-line">
								৳ 113,302<span class="small">.00</span>
							</td>
							<td class="no-line">
								৳ 21,990,600<span class="small">.00</span>
							</td>
						</tr>
						<tr>
							<td class="no-line">13</td>
							<td class="no-line">HSBC Bank</td>
							<td class="no-line">10.50 %</td>
							<td class="no-line">
								৳ 94,418<span class="small">.00</span>
							</td>
							<td class="no-line">
								৳ 18,325,400<span class="small">.00</span>
							</td>
						</tr>
						<tr>
							<td class="no-line">14</td>
							<td class="no-line">Premier Bank</td>
							<td class="no-line">10.50 %</td>
							<td class="no-line">
								৳ 132,648<span class="small">.00</span>
							</td>
							<td class="no-line">
								৳ 11,876,640<span class="small">.00</span>
							</td>
						</tr>
						<tr>
							<td class="no-line">15</td>
							<td class="no-line">IFIC Bank</td>
							<td class="no-line">10.75 %</td>
							<td class="no-line">
								৳ 115,451<span class="small">.00</span>
							</td>
							<td class="no-line">
								৳ 22,635,300<span class="small">.00</span>
							</td>
						</tr>
						<tr>
							<td class="no-line">16</td>
							<td class="no-line">NRB Bank</td>
							<td class="no-line">11.00 %</td>
							<td class="no-line">
								৳ 117,614<span class="small">.00</span>
							</td>
							<td class="no-line">
								৳ 23,284,200<span class="small">.00</span>
							</td>
						</tr>
						<tr>
							<td class="no-line">17</td>
							<td class="no-line">Shahjalal Islami Bank</td>
							<td class="no-line">11.00 %</td>
							<td class="no-line">
								৳ 123,863<span class="small">.00</span>
							</td>
							<td class="no-line">
								৳ 17,727,120<span class="small">.00</span>
							</td>
						</tr>
						<tr>
							<td class="no-line">18</td>
							<td class="no-line">City Bank</td>
							<td class="no-line">11.50 %</td>
							<td class="no-line">
								৳ 121,976<span class="small">.00</span>
							</td>
							<td class="no-line">
								৳ 24,592,800<span class="small">.00</span>
							</td>
						</tr>
						<tr>
							<td class="no-line">19</td>
							<td class="no-line">Midland Bank</td>
							<td class="no-line">11.50 %</td>
							<td class="no-line">
								৳ 127,972<span class="small">.00</span>
							</td>
							<td class="no-line">
								৳ 18,713,280<span class="small">.00</span>
							</td>
						</tr>
						<tr>
							<td class="no-line">20</td>
							<td class="no-line">Prime Bank</td>
							<td class="no-line">11.50 %</td>
							<td class="no-line">
								৳ 127,972<span class="small">.00</span>
							</td>
							<td class="no-line">
								৳ 18,713,280<span class="small">.00</span>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<Footer />
		</div>
	);
};

export default Compare;
