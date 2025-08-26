import "../../css/SidebarBtn.css";

export default function SidebarBtn() {
  return (
    <button
      className="btn-organizer m-3"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasScrolling"
      aria-controls="offcanvasScrolling"
    >
      Organizer Commands
    </button>
  );
}
