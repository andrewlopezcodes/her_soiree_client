window.addEventListener('load', () => {


  const baseURL = 'http://localhost:3018/her_soiree';




  const createher_soiree = () => {
    event.preventDefault();
    console.log('createher_soiree');
    const title = document.querySelector('#title').value;
    const organizer_name = document.querySelector('#organizer_name').value;
    const organizer_website_url = document.querySelector('#organizer_website_url').value;
    const event_type = document.querySelector('#event_type').value;
    const event_topic = document.querySelector('#event_topic').value;
    const description = document.querySelector('#description').value;
    const venue_name = document.querySelector('#venue_name').value;
    const street_address = document.querySelector('#street_address').value;
    const city = document.querySelector('#city').value;
    const state = document.querySelector('#state').value;
    const zipcode = document.querySelector('#zipcode').value;
    const participant_age = document.querySelector('#participant_age').value;
    const event_start_time = document.querySelector('#event_start_time').value;
    const event_finish_time =document.querySelector('#event_finish_time').value;
    const event_frequency = document.querySelector('#event_frequency').value;
    const dress_code = document.querySelector('#dress_code').value;
    const event_price = document.querySelector('#event_price').value;
    const event_flyer_url = document.querySelector('#event_flyer_url').value;
    axios.post(baseURL, {title, organizer_name, organizer_website_url, event_type, event_topic, description, venue_name, street_address, city, state, zipcode, participant_age, event_start_time, event_start_time, event_finish_time, event_frequency, dress_code, event_price, event_flyer_url})
      .then( result => {
        showher_soiree( result.data );
      })
      .catch( error => { console.error( error ); });
  }

  const newher_soiree = () => {
    event.preventDefault();
    document.querySelector('#app').innerHTML = `
    <button type="button" class="btn btn-primary" id="home_button">Back to List</button>
      <form>
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" id="title" class="form-control" />
        </div>
        <div class="form-group">
          <label for="organizer_name">Organizer name</label>
          <input type="text" id="organizer_name" class="form-control" />
        </div>
        <div class="form-group">
          <label for="organizer_website_url">Organizer website url</label>
          <input type="url" id="organizer_website_url" class="form-control" />
        </div>
        <div class="form-group">
          <label for="event_type">Event type</label>
          <input type="text" id="event_type" class="form-control" />
        </div>
        <div class="form-group">
          <label for="event_type">Event topic</label>
          <input type="text" id="event_topic" class="form-control" />
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <input type="text" id="description" class="form-control" />
        </div>
        <div class="form-group">
          <label for="venue_name">Venue name</label>
          <input type="text" id="venue_name" class="form-control" />
        </div>
        <div class="form-group">
          <label for="street_address">Street Address</label>
          <input type="text" id="street_address" class="form-control" />
        </div>
        <div class="form-group">
          <label for="city">City</label>
          <input type="text" id="city" class="form-control" />
        </div>
        <div class="form-group">
          <label for="state">State</label>
          <input type="text" id="state" class="form-control" />
        </div>
        <div class="form-group">
          <label for="zipcode">Zipcode</label>
          <input type="text" id="zipcode" class="form-control" />
        </div>
        <div class="form-group">
          <label for="participant_age">Participant age</label>
          <input type="text" id="participant_age" class="form-control" />
        </div>
        <div class="form-group">
          <label for="event_start_time">Event Start Time</label>
          <input type="datetime-local" id="event_start_time" class="form-control" />
        </div>
        <div class="form-group">
          <label for="event_finish_time">Event Finish Time</label>
          <input type="datetime-local" id="event_finish_time" class="form-control" />
        </div>
        <div class="form-group">
          <label for="event_frequency">Event Frequency</label>
          <input type="text" id="event_frequency" class="form-control" />
        </div>
        <div class="form-group">
          <label for="dress_code">Dress Code</label>
          <input type="text" id="dress_code" class="form-control" />
        </div>
        <div class="form-group">
          <label for="event_price">Ticket Price</label>
          <input type="text" id="event_price" class="form-control" />
        </div>
        <div class="form-group">
          <label for="event_flyer_url">Event Flyer URL</label>
          <input type="url" id="event_flyer_url" class="form-control" />
        </div>
        <button type="submit" class="btn btn-primary" id="create-her_soiree">Create Event</button>
      </form>
    `;
    document.querySelector('#create-her_soiree').addEventListener('click',  createher_soiree);
    document.querySelector('#home_button').addEventListener('click', allher_soiree);

  }

  const showher_soiree = her_soiree => {
    console.log('Show page for Soiree:');
    console.log(her_soiree);
    document.querySelector('#app').innerHTML = `
      <div class="h3">${her_soiree.title}</div>
      <img src="${her_soiree.event_flyer_url}" width="40%" />
      <table class="table table-striped">
        <tbody>
          <tr>
            <th scope="row">Event Title</th>
            <td>${her_soiree.title}</td>
          </tr>
          <tr>
            <th scope="row">Organizer's Name</th>
            <td>${her_soiree.organizer_name}</td>
          </tr>
          <tr>
            <th scope="row">Organizer's Website</th>
            <td>${her_soiree.organizer_website_url}</td>
          </tr>
          <tr>
            <th scope="row">Event Type</th>
            <td>${her_soiree.event_type}</td>
          </tr>
          <tr>
            <th scope="row">Event Topic</th>
            <td>${her_soiree.event_topic}</td>
          </tr>
          <tr>
            <th scope="row">Description</th>
            <td>${her_soiree.description}</td>
          </tr>
          <tr>
            <th scope="row">Venue Name</th>
            <td>${her_soiree.venue_name}</td>
          </tr>
          <tr>
            <th scope="row">Stree Address</th>
            <td>${her_soiree.street_address}</td>
          </tr>
          <tr>
            <th scope="row">City</th>
            <td>${her_soiree.city}</td>
          </tr>
          <tr>
            <th scope="row">State</th>
            <td>${her_soiree.state}</td>
          </tr>
          <tr>
            <th scope="row">Zipcode</th>
            <td>${her_soiree.zipcode}</td>
          </tr>
          <tr>
            <th scope="row">Participants Age</th>
            <td>${her_soiree.participant_age}</td>
          </tr>
          <tr>
            <th scope="row">Event Start Time</th>
            <td>${her_soiree.event_start_time}</td>
          </tr>
          <tr>
            <th scope="row">Event Finish Time</th>
            <td>${her_soiree.event_finish_time}</td>
          </tr>
          <tr>
            <th scope="row">Event Frequency</th>
            <td>${her_soiree.event_frequency}</td>
          </tr>
          <tr>
            <th scope="row">Dress Code</th>
            <td>${her_soiree.dress_code}</td>
          </tr>
          <tr>
            <th scope="row">Event Price</th>
            <td>${her_soiree.event_price}</td>
          </tr>
          <tr>
            <th scope="row">event_flyer_url</th>
            <td>${her_soiree.event_flyer_url}</td>
          </tr>
        </tbody>
      </table>
    `;
  }

  const updateher_soiree = id =>{
    event.preventDefault();
    console.log('updateher_soiree');
    const title = document.querySelector('#edit-title').value;
    const organizer_name = document.querySelector('#edit-organizer_name').value;
    const organizer_website_url = document.querySelector('#edit-organizer_website_url').value;
    const event_type = document.querySelector('#edit-event_type').value;
    const event_topic = document.querySelector('#edit-event_topic').value;
    const description = document.querySelector('#edit-description').value;
    const venue_name = document.querySelector('#edit-venue_name').value;
    const street_address = document.querySelector('#edit-street_address').value;
    const city = document.querySelector('#edit-city').value;
    const state = document.querySelector('#edit-state').value;
    const zipcode = document.querySelector('#edit-zipcode').value;
    const participant_age = document.querySelector('#edit-participant_age').value;
    const event_start_time = document.querySelector('#edit-event_start_time').value;
    const event_finish_time =document.querySelector('#edit-event_finish_time').value;
    const event_frequency = document.querySelector('#edit-event_frequency').value;
    const dress_code = document.querySelector('#edit-dress_code').value;
    const event_price = document.querySelector('#edit-event_price').value;
    const event_flyer_url = document.querySelector('#edit-event_flyer_url').value;

   axios.put(`${baseURL}/${id}`, {title, organizer_name, organizer_website_url, event_type, event_topic, description, venue_name, street_address, city, state, zipcode, participant_age, event_start_time, event_start_time, event_finish_time, event_frequency, dress_code, event_price, event_flyer_url})
      .then( result => {
        console.log(result);
        showher_soiree( result.data );
      })
      .catch( error => { console.error( error ); });
  }

  const edither_soiree = her_soiree => {
    event.preventDefault();
    document.querySelector('#app').innerHTML = `
    <button type="button" class="btn btn-primary" id="back_button" onclick="location.href='homepage.html'">Back To List</button>
    <form>
      <div class="form-group">
        <label for="edit-title">Title</label>
        <input type="text" id="edit-title" class="form-control" />
      </div>
      <div class="form-group">
        <label for="edit-organizer_name">Organizer name</label>
        <input type="text" id="edit-organizer_name" class="form-control" />
      </div>
      <div class="form-group">
        <label for="edit-organizer_website_url">Organizer website url</label>
       <input type="text" id="edit-organizer_website_url" class="form-control" />
      </div>
      <div class="form-group">
        <label for="edit-event_type">Event type</label>
        <input type="text" id="edit-event_type" class="form-control" />
      </div>
      <div class="form-group">
        <label for="edit-event_topic">Event Topic</label>
        <input type="text" id="edit-event_topic" class="form-control" />
      </div>
      <div class="form-group">
        <label for="edit-description">Description</label>
        <input type="text" id="edit-description" class="form-control" />
      </div>
      <div class="form-group">
        <label for="edit-venue_name">Venue name</label>
        <input type="text" id="edit-venue_name" class="form-control" />
      </div>
      <div class="form-group">
        <label for="edit-street_address">Street Address</label>
        <input type="text" id="edit-street_address" class="form-control" />
      </div>
      <div class="form-group">
        <label for="edit-city">City</label>
        <input type="text" id="edit-city" class="form-control" />
      </div>
      <div class="form-group">
        <label for="edit-state">State</label>
        <input type="text" id="edit-state" class="form-control" />
      </div>
      <div class="form-group">
        <label for="edit-zipcode">Zipcode</label>
        <input type="text" id="edit-zipcode" class="form-control" />
      </div>
      <div class="form-group">
        <label for="edit-participant_age">Participant age</label>
        <input type="text" id="edit-participant_age" class="form-control" />
      </div>
      <div class="form-group">
        <label for="edit-event_start_time">Event Start Time</label>
        <input type="datetime-local" id="edit-event_start_time" class="form-control" />
      </div>
      <div class="form-group">
        <label for="edit-event_finish_time">Event Finish Time</label>
        <input type="datetime-local" id="edit-event_finish_time" class="form-control" />
      </div>
      <div class="form-group">
        <label for="edit-event_frequency">Event Frequency</label>
        <input type="text" id="edit-event_frequency" class="form-control" />
      </div>
      <div class="form-group">
        <label for="edit-dress_code">Dress Code</label>
        <input type="text" id="edit-dress_code" class="form-control" />
      </div>
      <div class="form-group">
        <label for="edit-event_price">Ticket Price</label>
        <input type="text" id="edit-event_price" class="form-control" />
      </div>
      <div class="form-group">
        <label for="edit-event_flyer_url">Event Flyer URL</label>
        <input type="url" id="edit-event_flyer_url" class="form-control" />
      </div>
      <button type="submit" class="btn btn-primary" id="update-her_soiree">Update Soiree</button>
    </form>
  `;
    document.querySelector('#edit-title').value = her_soiree.title;
    document.querySelector('#edit-organizer_name').value =her_soiree.organizer_name;
    document.querySelector('#edit-organizer_website_url').value = her_soiree.organizer_website_url;
    document.querySelector('#edit-event_type').value = her_soiree.event_type;
    document.querySelector('#edit-event_topic').value = her_soiree.event_topic;
    document.querySelector('#edit-description').value = her_soiree.description;
    document.querySelector('#edit-venue_name').value = her_soiree.venue_name;
    document.querySelector('#edit-street_address').value = her_soiree.street_address;
    document.querySelector('#edit-city').value = her_soiree.city;
    document.querySelector('#edit-state').value = her_soiree.state;
    document.querySelector('#edit-zipcode').value = her_soiree.zipcode;
    document.querySelector('#edit-participant_age').value = her_soiree.participant_age;
    document.querySelector('#edit-event_start_time').value = her_soiree.event_start_time.slice(0, -1);
    document.querySelector('#edit-event_finish_time').value = her_soiree.event_finish_time.slice(0, -1);
    document.querySelector('#edit-event_frequency').value = her_soiree.event_frequency;
    document.querySelector('#edit-dress_code').value = her_soiree.dress_code;
    document.querySelector('#edit-event_price').value = her_soiree.event_price;
    document.querySelector('#edit-event_flyer_url').value = her_soiree.event_flyer_url;
    document.querySelector('#update-her_soiree').addEventListener('click', ()=>{
      updateher_soiree(her_soiree.id); });
  }


  const deleteher_soiree = id => {
    console.log('Deleting her_soiree no.', id);
    axios.delete(`${baseURL}/${id}`)
    .then(result => {allher_soiree(); })
    .catch(error => {console.error(error); });
  }

  const allher_soiree = () => {
    document.querySelector('#app').innerHTML = `
      <div>
      <button type="button" class="btn btn-primary" id="back_button" onclick="location.href='her_soiree.html'">Home</button>
        <button type="button" class="btn btn-success" id="newher_soiree">Add a Soiree</button>
      </div>
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Organizer Name</th>
            <th scope="col">Organizer Website</th>
            <th scope="col">Event Type</th>
            <th scope="col">Event Topic</th>
            <th scope="col">Description</th>
            <th scope="col">Venue Name</th>
            <th scope="col">Street Address</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            <th scope="col">Zipcode</th>
            <th scope="col">Participant Age</th>
            <th scope="col">Event Start Time</th>
            <th scope="col">Event Finish Time</th>
            <th scope="col">Event Frequency</th>
            <th scope="col">Dress Code</th>
            <th scope="col">Price</th>
            <th scope="col">Flyer URL</th>
          </tr>
        </thead>
        <tbody id="her_soiree-tbody"></tbody>
      </table>
    `;
    document.querySelector('#newher_soiree').addEventListener('click', newher_soiree);
    axios.get( baseURL )
      .then( her_soiree => {
        her_soiree.data.forEach( her_soiree => {
          const trEl = document.createElement('tr');
          trEl.innerHTML = `
            <td>${her_soiree.title}</td>
            <td id="show-${her_soiree.id}">${her_soiree.title}</td>
            <td>${her_soiree.organizer_name}</td>
            <td>${her_soiree.organizer_website_url}</td>
            <td>${her_soiree.event_type}</td>
            <td>${her_soiree.event_topic}</td>
            <td>${her_soiree.description}</td>
            <td>${her_soiree.venue_name}</td>
            <td>${her_soiree.street_address}</td>
            <td>${her_soiree.city}</td>
            <td>${her_soiree.state}</td>
            <td>${her_soiree.zipcode}</td>
            <td>${her_soiree.participant_age}</td>
            <td>${her_soiree.event_start_time}</td>
            <td>${her_soiree.event_finish_time}</td>
            <td>${her_soiree.event_frequency}</td>
            <td>${her_soiree.dress_code}</td>
            <td>${her_soiree.event_price}</td>
            <td>${her_soiree.event_flyer_url}</td>
            <td><button type="button" class="btn btn-info btn-sm" id="edit-${her_soiree.id}">Edit Soiree</button>&nbsp;<button type="button" class="btn btn-danger btn-sm" id="delete-${her_soiree.id}">Delete Soiree</button></td>
          `;
          document.querySelector('#her_soiree-tbody').appendChild(trEl);
          document.querySelector(`#show-${her_soiree.id}`).addEventListener('click', () => { showher_soiree(her_soiree); });
          document.querySelector(`#edit-${her_soiree.id}`).addEventListener('click', () => { edither_soiree(her_soiree); });
          document.querySelector(`#delete-${her_soiree.id}`).addEventListener('click', () => { deleteher_soiree(her_soiree.id); });
        });
      })
      .catch( error => { console.error( error ); });
  }

  document.querySelector('#app-start').addEventListener('click', allher_soiree);
  allher_soiree();
});
