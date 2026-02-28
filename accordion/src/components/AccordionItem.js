export default function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="accordion-item">
      <button className="accordion-title" onClick={onToggle}>
        {item.title}
        <span className="icon">{isOpen ? "−" : "+"}</span>
      </button>

      {isOpen && (
        <div className="accordion-content">
          <p>{item.content}</p>
        </div>
      )}
    </div>
  );
}
