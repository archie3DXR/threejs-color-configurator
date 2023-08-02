import { useCustomization } from "/contexts/Customization.jsx"

const Configurator = () => {
	const { material, setMaterial } = useCustomization()

	return (
		<div className="configurator">
			<div className="configurator__section">
				<div className="configurator__section__title">Chair material</div>
				<div className="configurator__section__values">
					<div
						className={`item ${material === "leather" ? "item--active" : ""}`}
						onClick={() => setMaterial("leather")}
					>
						<div className="item__label">Leather</div>
					</div>
					<div
						className={`item ${material === "Metal" ? "item--active" : ""}`}
						onClick={() => setMaterial("metal")}
					>
						<div className="item__label">Metal</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Configurator
