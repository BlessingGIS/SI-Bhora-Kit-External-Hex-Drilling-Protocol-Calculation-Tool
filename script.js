function processForm() {
  // Get the selected value from the dropdown (Implant Diameter-Length)
  const Implant = document.getElementById("value1").value;
  const denseBoneChecked = document.getElementById("DenseBone").checked; // Check if "Dense Bone" is selected
  const tableNameDiv = document.getElementById("tableName"); // Div for displaying table name

  // Clear any previous table names and hide all tables initially
  tableNameDiv.innerHTML = "";

  // Hide all tables initially
  document.querySelectorAll("table").forEach(function(table) {
    table.style.display = "none";  // Hide all tables
  });

  // Check if a value has been selected
  if (!Implant) {
    alert("Please select an Implant.");
    return;
  }

  // Show table based on dropdown selection and whether Dense Bone is selected
  let tableId = "";  // Initialize table ID

  // Check the selected implant and whether Dense Bone is checked
  if (Implant === "IP-8.5") {
    tableId = denseBoneChecked ? "IP-8.5 Dense Bone" : "IP-8.5 Regular Bone";
    tableNameDiv.innerHTML = denseBoneChecked ? "Dense Bone Protocol For: IP-8.5" : "Regular Bone Protocol For: IP-8.5";
  } else if (Implant === "IP-10") {
    tableId = denseBoneChecked ? "IP-10 Dense Bone" : "IP-10 Regular Bone";
    tableNameDiv.innerHTML = denseBoneChecked ? "Dense Bone Protocol For: IP-10" : "Regular Bone Protocol For: IP-10";
  } else if (Implant === "IP-11.5") {
    tableId = denseBoneChecked ? "IP-11.5 Dense Bone" : "IP-11.5 Regular Bone";
    tableNameDiv.innerHTML = denseBoneChecked ? "Dense Bone Protocol For: IP-11.5" : "Regular Bone Protocol For: IP-11.5";
  } else if (Implant === "IP-13") {
    tableId = denseBoneChecked ? "IP-13 Dense Bone" : "IP-13 Regular Bone";
    tableNameDiv.innerHTML = denseBoneChecked ? "Dense Bone Protocol For: IP-13" : "Regular Bone Protocol For: IP-13";
  } else if (Implant === "IP-15") {
    tableId = denseBoneChecked ? "IP-15 Dense Bone" : "IP-15 Regular Bone";
    tableNameDiv.innerHTML = denseBoneChecked ? "Dense Bone Protocol For: IP-15" : "Regular Bone Protocol For: IP-15";        
  } else if (Implant === "IBN-8.5") {
    tableId = denseBoneChecked ? "IBN-8.5 Dense Bone" : "IBN-8.5 Regular Bone";
    tableNameDiv.innerHTML = denseBoneChecked ? "Dense Bone Protocol For: IBN-8.5" : "Regular Bone Protocol For: IBN-8.5";
  } else if (Implant === "IBN-10") {
    tableId = denseBoneChecked ? "IBN-10 Dense Bone" : "IBN-10 Regular Bone";
    tableNameDiv.innerHTML = denseBoneChecked ? "Dense Bone Protocol For: IBN-10" : "Regular Bone Protocol For: IBN-10";
  } else if (Implant === "IBN-11.5") {
    tableId = denseBoneChecked ? "IBN-11.5 Dense Bone" : "IBN-11.5 Regular Bone";
    tableNameDiv.innerHTML = denseBoneChecked ? "Dense Bone Protocol For: IBN-11.5" : "Regular Bone Protocol For: IBN-11.5";
  } else if (Implant === "IBN-13") {
    tableId = denseBoneChecked ? "IBN-13 Dense Bone" : "IBN-13 Regular Bone";
    tableNameDiv.innerHTML = denseBoneChecked ? "Dense Bone Protocol For: IBN-13" : "Regular Bone Protocol For: IBN-13";
  } else if (Implant === "IBN-15") {
    tableId = denseBoneChecked ? "IBN-15 Dense Bone" : "IBN-15 Regular Bone";
    tableNameDiv.innerHTML = denseBoneChecked ? "Dense Bone Protocol For: IBN-15" : "Regular Bone Protocol For: IBN-15";
  } else if (Implant === "IBT-8.5") {
    tableId = denseBoneChecked ? "IBT-8.5 Dense Bone" : "IBT-8.5 Regular Bone";
    tableNameDiv.innerHTML = denseBoneChecked ? "Dense Bone Protocol For: IBT-8.5" : "Regular Bone Protocol For: IBT-8.5";            
  } else if (Implant === "IBT-10") {
    tableId = denseBoneChecked ? "IBT-10 Dense Bone" : "IBT-10 Regular Bone";
    tableNameDiv.innerHTML = denseBoneChecked ? "Dense Bone Protocol For: IBT-10" : "Regular Bone Protocol For: IBT-10";
  } else if (Implant === "IBT-11.5") {
    tableId = denseBoneChecked ? "IBT-11.5 Dense Bone" : "IBT-11.5 Regular Bone";
    tableNameDiv.innerHTML = denseBoneChecked ? "Dense Bone Protocol For: IBT-11.5" : "Regular Bone Protocol For: IBT-11.5";
  } else if (Implant === "IBT-13") {
    tableId = denseBoneChecked ? "IBT-13 Dense Bone" : "IBT-13 Regular Bone";
    tableNameDiv.innerHTML = denseBoneChecked ? "Dense Bone Protocol For: IBT-13" : "Regular Bone Protocol For: IBT-13";
  } else if (Implant === "IBT-15") {
    tableId = denseBoneChecked ? "IBT-15 Dense Bone" : "IBT-15 Regular Bone";
    tableNameDiv.innerHTML = denseBoneChecked ? "Dense Bone Protocol For: IBT-15" : "Regular Bone Protocol For: IBT-15";
  } else if (Implant === "BAT-8.5") {
    tableId = denseBoneChecked ? "BAT-8.5 Dense Bone" : "BAT-8.5 Regular Bone";
    tableNameDiv.innerHTML = denseBoneChecked ? "Dense Bone Protocol For: BAT-8.5" : "Regular Bone Protocol For: BAT-8.5";                 
  } else if (Implant === "BAT-10") {
    tableId = denseBoneChecked ? "BAT-10 Dense Bone" : "BAT-10 Regular Bone";
    tableNameDiv.innerHTML = denseBoneChecked ? "Dense Bone Protocol For: BAT-10" : "Regular Bone Protocol For: BAT-10";
  } else if (Implant === "BAT-11.5") {
    tableId = denseBoneChecked ? "BAT-11.5 Dense Bone" : "BAT-11.5 Regular Bone";
    tableNameDiv.innerHTML = denseBoneChecked ? "Dense Bone Protocol For: BAT-11.5" : "Regular Bone Protocol For: BAT-11.5";
  } else if (Implant === "BAT-13") {
    tableId = denseBoneChecked ? "BAT-13 Dense Bone" : "BAT-13 Regular Bone";
    tableNameDiv.innerHTML = denseBoneChecked ? "Dense Bone Protocol For: BAT-13" : "Regular Bone Protocol For: BAT-13";
  } else if (Implant === "BAT-15") {
    tableId = denseBoneChecked ? "BAT-15 Dense Bone" : "BAT-15 Regular Bone";
    tableNameDiv.innerHTML = denseBoneChecked ? "Dense Bone Protocol For: BAT-15" : "Regular Bone Protocol For: BAT-15";            
  } else {
    alert("No matching protocol found for the selected option.");
    return;  // Stop if no matching implant is found
  }

  // Show the matching table based on the table ID
  const selectedTable = document.getElementById(tableId);
  if (selectedTable) {
    selectedTable.style.display = "table";  // Show the matched table
  } else {
    alert("The table ID '" + tableId + "' was not found.");
  }
}



  