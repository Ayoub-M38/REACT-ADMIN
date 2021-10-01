import "./featuredinfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
	return (
		<div className="featured">
			<div className="featuredItem">
				<span className="featuredTilte">Revanue</span>
				<div className="featuredMonyContainer">
					<span className="featuredMoney">$2.666</span>
					<span className="featuredMoneyRate">
						-11.2
						<ArrowDownward className="featuredIcon negative"/>
					</span>
				</div>
                <span className="featuredSub">Comapred to last month</span>
			</div>


			<div className="featuredItem">
				<span className="featuredTilte">Sales</span>
				<div className="featuredMonyContainer">
					<span className="featuredMoney">$5.566</span>
					<span className="featuredMoneyRate">
						-1.5
						<ArrowDownward className="featuredIcon negative" />
					</span>
				</div>
                <span className="featuredSub">Comapred to last month</span>
			</div>

			<div className="featuredItem">
				<span className="featuredTilte">Cost</span>
				<div className="featuredMonyContainer">
					<span className="featuredMoney">$3.259</span>
					<span className="featuredMoneyRate">
						2.5
						<ArrowUpward className="featuredIcon" />
					</span>
				</div>
                <span className="featuredSub">Comapred to last month</span>
			</div>
		</div>
	);
}
