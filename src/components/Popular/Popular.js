import React from "react";
import Tabs from "./Tabs";

import Api from "./Api";

export default function popo() {
	return (
		<div>
			<Tabs>
				<div label="All">
					<Api lang="all" />
				</div>
				<div label="Javascript">
					<Api lang="javascript" />
				</div>
				<div label="Python">
					<Api lang="python" />
				</div>
				<div label="CSS">
					<Api lang="css" />
				</div>
				<div label="Java">
					<Api lang="java" />
				</div>
				<div label="Ruby">
					<Api lang="ruby" />
				</div>
			</Tabs>
		</div>
	);
}
