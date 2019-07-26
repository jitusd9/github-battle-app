import React, { Component } from "react";
import axios from "axios";

const Repo = ({ repo, index }) => (
	<tr>
		<td>{index + 1}</td>
		<td className="repo-name">{repo.name}</td>
		<td>{repo.stargazers_count} Stars</td>
	</tr>
);

export class Javascript extends Component {
	constructor(props) {
		super(props);

		this.state = {
			repos: [],
			loading: true,
			error: null
		};
	}

	componentDidMount() {
		axios
			.get(
				window.encodeURI(
					`https://api.github.com/search/repositories?q=stars:>1+language:${
						this.props.lang
					}&sort=stars&order=desc&type=Repositories`
				)
			)
			.then(response => {
				const repos = response.data.items;
				this.setState({
					repos,
					loading: false
				});
			})
			.catch(error => {
				this.setState({
					error: error,
					loading: false
				});
			});
	}

	renderLoading() {
		return (
			<div className="loading">
				Loading...Most popular {this.props.lang} repositories
			</div>
		);
	}

	renderError() {
		return <div className="error">Sorry! an error ocurred</div>;
	}

	renderList() {
		const { error, repos } = this.state;

		if (error) {
			console.log(error);
			return this.renderError();
		}

		return (
			<table className="table table-striped">
				<thead>
					<tr>
						<th>#</th>
						<th>Repo Name</th>
						<th>Stars Count</th>
					</tr>
				</thead>
				<tbody>
					{repos.map((repo, index) => (
						<Repo repo={repo} index={index} key={repo.id} />
					))}
				</tbody>
			</table>
		);
	}

	render() {
		return this.state.loading ? this.renderLoading() : this.renderList();
	}
}

export default Javascript;
