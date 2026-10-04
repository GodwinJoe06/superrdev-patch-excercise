import { useState } from "react";

export default function TaskFilters({
  status,
  setStatus,
  priority,
  setPriority,
  assignee,
  setAssignee,
  sortOrder,
  setSortOrder
}) {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const activeFilterCount = [
    status,
    priority,
    assignee
  ].filter(Boolean).length;

  const handleSelect = (type, value) => {
    if (type === "status") {
      setStatus(value);
    }

    if (type === "priority") {
      setPriority(value);
    }

    if (type === "assignee") {
      setAssignee(value);
    }

    if (type === "sort") {
      setSortOrder(value);
    }
  };

  const getLabel = (type, value) => {
    if (!value) return "";

    if (type === "status") {
      const labels = {
        OPEN: "Open",
        IN_PROGRESS: "In Progress",
        DONE: "Done"
      };

      return labels[value] || value;
    }

    if (type === "sort") {
      return value === "DESC" ? "Newest" : "Oldest";
    }

    return value;
  };

  return (
    <div className="filter-container">

      {/* MAIN FILTER BUTTON */}
      <button
        className={`filter-button ${open ? "active" : ""}`}
        onClick={() => {
          setOpen((prev) => !prev);
          setActiveMenu(null);
        }}
      >
        <span className="filter-icon">☷</span>

        <span>Filter</span>

        {activeFilterCount > 0 && (
          <span className="filter-count">
            {activeFilterCount}
          </span>
        )}
      </button>

      {open && (
        <div className="filter-menu">

          {/* ================= STATUS ================= */}

          <div
            className={`filter-menu-item ${
              activeMenu === "status" ? "hovered" : ""
            }`}
            onMouseEnter={() => setActiveMenu("status")}
          >
            <span>
              Status

              {status && (
                <span className="selected-value">
                  {getLabel("status", status)}
                </span>
              )}
            </span>

            <span className="submenu-arrow">›</span>

            {activeMenu === "status" && (
              <div className="filter-submenu">

                <div
                  className={`filter-option ${
                    !status ? "selected" : ""
                  }`}
                  onClick={() =>
                    handleSelect("status", "")
                  }
                >
                  All statuses
                </div>

                <div
                  className={`filter-option ${
                    status === "OPEN" ? "selected" : ""
                  }`}
                  onClick={() =>
                    handleSelect("status", "OPEN")
                  }
                >
                  Open
                </div>

                <div
                  className={`filter-option ${
                    status === "IN_PROGRESS"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleSelect(
                      "status",
                      "IN_PROGRESS"
                    )
                  }
                >
                  In Progress
                </div>

                <div
                  className={`filter-option ${
                    status === "DONE"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleSelect("status", "DONE")
                  }
                >
                  Done
                </div>

              </div>
            )}
          </div>


          {/* ================= PRIORITY ================= */}

          <div
            className={`filter-menu-item ${
              activeMenu === "priority" ? "hovered" : ""
            }`}
            onMouseEnter={() =>
              setActiveMenu("priority")
            }
          >
            <span>
              Priority

              {priority && (
                <span className="selected-value">
                  {priority}
                </span>
              )}
            </span>

            <span className="submenu-arrow">›</span>

            {activeMenu === "priority" && (
              <div className="filter-submenu">

                <div
                  className={`filter-option ${
                    !priority ? "selected" : ""
                  }`}
                  onClick={() =>
                    handleSelect("priority", "")
                  }
                >
                  All priorities
                </div>

                <div
                  className={`filter-option ${
                    priority === "HIGH"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleSelect(
                      "priority",
                      "HIGH"
                    )
                  }
                >
                  <span className="priority-dot high"></span>
                  High
                </div>

                <div
                  className={`filter-option ${
                    priority === "MEDIUM"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleSelect(
                      "priority",
                      "MEDIUM"
                    )
                  }
                >
                  <span className="priority-dot medium"></span>
                  Medium
                </div>

                <div
                  className={`filter-option ${
                    priority === "LOW"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleSelect(
                      "priority",
                      "LOW"
                    )
                  }
                >
                  <span className="priority-dot low"></span>
                  Low
                </div>

              </div>
            )}
          </div>


          {/* ================= ASSIGNEE ================= */}

          <div
            className={`filter-menu-item ${
              activeMenu === "assignee" ? "hovered" : ""
            }`}
            onMouseEnter={() =>
              setActiveMenu("assignee")
            }
          >
            <span>
              Assignee

              {assignee && (
                <span className="selected-value">
                  {assignee}
                </span>
              )}
            </span>

            <span className="submenu-arrow">›</span>

            {activeMenu === "assignee" && (
              <div className="filter-submenu">

                <div
                  className={`filter-option ${
                    !assignee ? "selected" : ""
                  }`}
                  onClick={() =>
                    handleSelect("assignee", "")
                  }
                >
                  All assignees
                </div>

                <div
                  className={`filter-option ${
                    assignee === "Alice"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleSelect(
                      "assignee",
                      "Alice"
                    )
                  }
                >
                  <span className="assignee-avatar">
                    A
                  </span>
                  Alice
                </div>

                <div
                  className={`filter-option ${
                    assignee === "Bob"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleSelect(
                      "assignee",
                      "Bob"
                    )
                  }
                >
                  <span className="assignee-avatar">
                    B
                  </span>
                  Bob
                </div>

                <div
                  className={`filter-option ${
                    assignee === "Carol"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleSelect(
                      "assignee",
                      "Carol"
                    )
                  }
                >
                  <span className="assignee-avatar">
                    C
                  </span>
                  Carol
                </div>

                <div
                  className={`filter-option ${
                    assignee === "Dave"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleSelect(
                      "assignee",
                      "Dave"
                    )
                  }
                >
                  <span className="assignee-avatar">
                    D
                  </span>
                  Dave
                </div>

                <div
                  className={`filter-option ${
                    assignee === "Eve"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleSelect(
                      "assignee",
                      "Eve"
                    )
                  }
                >
                  <span className="assignee-avatar">
                    E
                  </span>
                  Eve
                </div>

              </div>
            )}
          </div>


          {/* ================= SORT BY ================= */}

          <div
            className={`filter-menu-item ${
              activeMenu === "sort" ? "hovered" : ""
            }`}
            onMouseEnter={() =>
              setActiveMenu("sort")
            }
          >
            <span>
              Sort by

              {sortOrder && (
                <span className="selected-value">
                  {getLabel("sort", sortOrder)}
                </span>
              )}
            </span>

            <span className="submenu-arrow">›</span>

            {activeMenu === "sort" && (
              <div className="filter-submenu">

                <div
                  className={`filter-option ${
                    sortOrder === "DESC"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleSelect(
                      "sort",
                      "DESC"
                    )
                  }
                >
                  ↓ Newest first
                </div>

                <div
                  className={`filter-option ${
                    sortOrder === "ASC"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleSelect(
                      "sort",
                      "ASC"
                    )
                  }
                >
                  ↑ Oldest first
                </div>

              </div>
            )}
          </div>

        </div>
      )}
    </div>
  );
}