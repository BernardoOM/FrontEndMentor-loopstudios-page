import "../styles/ItemBox.css"

export default function ItemBox({ value, img_path }) {
    return (
        <div className="itemBox">
            <img className="img-itemBox" src={img_path} alt={img_path} />
            <h2 className="itemBox-title">{value}</h2>
        </div>
    )
}
