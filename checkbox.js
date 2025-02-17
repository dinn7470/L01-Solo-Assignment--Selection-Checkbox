document.addEventListener("DOMContentLoaded", function () {
    const selectAllCheckbox = document.getElementById("selectAll");
    const childCheckboxes = document.querySelectorAll(".child-checkbox");

    function updateSelectAllState() {
        // Using `every()` to check if all checkboxes are checked
        selectAllCheckbox.checked = Array.from(childCheckboxes).every(checkbox => checkbox.checked);
    }

    selectAllCheckbox.addEventListener("change", function () {
        Array.from(childCheckboxes).forEach((checkbox) => {
            checkbox.checked = selectAllCheckbox.checked;
        });

        updateSelectAllState();
    });

    Array.from(childCheckboxes).forEach((checkbox) => {
        checkbox.addEventListener("change", updateSelectAllState);
    });
});
