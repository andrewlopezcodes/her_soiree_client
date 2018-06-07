window.addEventListener('load', ()=> {
  console.log(`view all soiree page`);

  const her_soireeTitlesListEl = document.querySelector('#her_soireeTitlesList');
  const mainPanelEl = document.querySelector('#main-panel')
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
    const event_start_time = document.querySelector('#event_start_time').value
    const event_finish_time = document.querySelector('#event_finish_time').value
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
    document.querySelector('#app').innerHTML = `
    <button type="button" class="btn btn-primary" id="home_button">Home</button>
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
          <label for="event_topic">Event topic</label>
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
    document.querySelector('#home_button').addEventListener('click', allher_soiree);
    document.querySelector('#create-her_soiree').addEventListener('click', createher_soiree);

  }


  const edither_soiree = her_soiree => {
    document.querySelector('#app3').innerHTML = `
    <button type="button" class="btn btn-primary" id="home_button">Home</button>
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
        <input type="text" id="edit-organizer_website_url" class="form-control"/>
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
    console.log('times', her_soiree.event_start_time); // debug
    console.log(typeof her_soiree.event_start_time); // debug
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



  const showher_soiree= her_soiree => {
    event.preventDefault();
    mainPanelEl.innerHTML = '';
    const focusTitleEl = document.createElement('h3');
    const focusContentEl = document.createElement('p')
    focusTitleEl.innerHTML = her_soiree.title;
    focusContentEl.innerHTML = her_soiree.description;
    const editButtonEl = document.createElement('button');
    const deleteButtonEl = document.createElement('button');
    editButtonEl.id = 'edit-button';
    deleteButtonEl.id = 'delete-button';
    editButtonEl.innerHTML ='Edit';
    deleteButtonEl.innerHTML = 'Delete'
    mainPanelEl.appendChild(focusTitleEl);
    mainPanelEl.appendChild(focusContentEl);
    mainPanelEl.appendChild(editButtonEl);
    mainPanelEl.appendChild(deleteButtonEl);
    document.querySelector('#edit-button').addEventListener('click', () => {edither_soiree(her_soiree.id)});
    document.querySelector('#delete-button').addEventListener('click', () => {deleteher_soiree(her_soiree.id)});
  }

const loadher_soiree =() => {

  axios.get(baseURL)
  .then(response => {
    her_soireeTitlesListEl.innerHTML='';
    response.data.forEach(her_soiree => {
      const her_soireeTitleEl = document.createElement('li');
      her_soireeTitleEl.innerHTML = her_soiree.title;
      her_soireeTitlesListEl.appendChild(her_soireeTitleEl);
      her_soireeTitleEl.addEventListener('click', () => {showher_soiree(her_soiree)});
    });
  })
  .catch(error => console.error(error));
}

loadher_soiree();
document.querySelector('#newher_soiree').addEventListener('click', newher_soiree);



});
