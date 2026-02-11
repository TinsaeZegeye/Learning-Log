import { HiTemplate } from "react-icons/hi";

export default function Stats({ items }) {
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round((packedItems * 100) / totalItems);
  return (
    <footer className="stats">
      <em>
        <HiTemplate style={{ fontSize: "35px", color: "#e5771f" }} />
        {totalItems === 0
          ? "Start adding some items to your packing list"
          : `You have
        ${totalItems} ${totalItems >= 1 ? "items" : "item"} in the list and you
        have already packed
        ${packedItems}(${packedPercentage}
        %).`}
      </em>
    </footer>
  );
}