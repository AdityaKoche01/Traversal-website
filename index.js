function createItinerary() {
  const destination = document.getElementById('destination').value;
  const dates = document.getElementById('dates').value;

  if (destination && dates) {
    const itineraryList = document.getElementById('itinerary-list');
    const newItem = document.createElement('li');
    newItem.textContent = `Destination: ${destination}, Dates: ${dates}`;
    itineraryList.appendChild(newItem);

    
  } else {
    alert('Please fill in both Destination and Dates');
  }
}
