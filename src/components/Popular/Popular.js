import React from "react";
import Tabs from "./Tabs";

import Api from "./Api";

export default function popo() {
	return (
		<div>
			<Tabs>
				<div label="All">
					<Api />
				</div>
				<div label="Javascript">
					<Api />
				</div>
				<div label="Python">
					<Api />
				</div>
				<div label="CSS">
					<Api />
				</div>
				<div label="Java">
					<Api />
				</div>
				<div label="Ruby">
					<Api />
				</div>
			</Tabs>
		</div>
	);
}
