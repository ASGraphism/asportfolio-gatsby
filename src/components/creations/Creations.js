import React, { useState } from "react";
import * as creation from "./creationsDefault";
import IsoTopeGrid from "react-isotope";

import "./creations.scss";

const CreationsArea = ({ data }) => {
	const [filters, updateFilters] = useState(creation.filtersCreation);

	const onFilter = (event) => {
		const {
			target: { value, checked },
		} = event;

		updateFilters((state) =>
			state.map((f) => {
				if (f.label === value) {
					return {
						...f,
						isChecked: checked,
					};
				}

				return f;
			})
		);
	};

	return (
		<>
			<div className="container-side l-side ">
				<h1>
					Discover
					<span className="subtitle">my work and creations</span>
				</h1>

				<div className="filter-container">
					{filters.map((f) => (
						<div className="filter" key={`${f.label}_key`}>
							<input
								id={f.label}
								type="checkbox"
								value={f.label}
								onChange={onFilter}
								checked={f.isChecked}
							/>
							<label htmlFor={f.label}>{f.label}</label>
						</div>
					))}
				</div>

				<div className="creationsWrap">
					<IsoTopeGrid
						gridLayout={creation.creationsDefault} // gridlayout of cards
						noOfCols={3} // number of columns show in one row
						unitWidth={200} // card width of 1 unit
						unitHeight={100} // card height of 1 unit
						filters={filters} // list of selected filters
					>
						{creation.creationsDefault.map((card) => (
							<div key={card.id} className={card.filter[0]}>
								{card.name}
								<img src={card.pictures.logo} alt={card.name} />
							</div>
						))}
					</IsoTopeGrid>
				</div>
			</div>
			<div className="container-side r-side">Project preview</div>
		</>
	);
};

export default CreationsArea;
