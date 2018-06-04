window.addEventListener('load', () => {


  const baseURL = 'http://localhost:3018/her_soiree';

  const createEvent = () => {
    event.preventDefault();
    console.log('creatEvent');
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
    axios.post(baseURL, {title, organizer_name, orgnizer_website_url, event_type, event_topic, description, venue_name, street_address, city, state, zipcode, participant_age, event_start_time, event_start_time, event_finish_time, event_frequency, dress_code, event_price, event_flyer_url})
      .then( result => {
        showEvent( result.data );
      })
      .catch( error => { console.error( error ); });
  }

  const newEvent = () => {
    document.querySelector('#app').innerHTML = `
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
          <input type="text" id="organizer_website_url" class="form-control" />
        </div>
        <div class="form-group">
          <label for="event_type">Event type</label>
          <input type="text" id="event_type" class="form-control" />
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
          <label for="title">Title</label>
          <input type="text" id="title" class="form-control" />
        </div>
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" id="title" class="form-control" />
        </div>
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" id="title" class="form-control" />
        </div>
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" id="title" class="form-control" />
        </div>
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" id="title" class="form-control" />
        </div>
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" id="title" class="form-control" />
        </div>
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" id="title" class="form-control" />
        </div>
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" id="title" class="form-control" />
        </div>
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" id="title" class="form-control" />
        </div>
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" id="title" class="form-control" />
        </div>
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" id="title" class="form-control" />
        </div>
        <button type="submit" class="btn btn-primary" id="create-movie">Create</button>
      </form>
    `;
    document.querySelector('#create-movie').addEventListener('click', createMovie);
  }

  const showEvent = movie => {
    console.log('Show page for movie:');
    console.log(movie);
    document.querySelector('#app').innerHTML = `
      <div class="h3">${movie.title}</div>
      <img src="${movie.poster_url}" width="40%" />
      <table class="table table-striped">
        <tbody>
          <tr>
            <th scope="row">Director</th>
            <td>${movie.director}</td>
          </tr>
          <tr>
            <th scope="row">Year</th>
            <td>${movie.year}</td>
          </tr>
          <tr>
            <th scope="row">Rating</th>
            <td>${movie.rating}</td>
          </tr>
        </tbody>
      </table>
    `;
  }

  const updateEvent = id =>{
    event.preventDefault();
    console.log('createMovie');
    const title = document.querySelector('#edit-title').value;
    const director = document.querySelector('#edit-director').value;
    const year = document.querySelector('#edit-year').value;
    const rating = document.querySelector('#edit-rating').value;
    const poster_url = document.querySelector('#edit-poster_url').value;
    axios.put(`${baseURL}/${id}`, {title, director, year, rating, poster_url})
      .then( result => {
        showMovie( result.data );
      })
      .catch( error => { console.error( error ); });
  }

  const editEvent = movie => {
    document.querySelector('#app').innerHTML = `
      <form>
        <div class="form-group">
          <label for="ediit-title">Title</label>
          <input type="text" id="edit-title" class="form-control" />
        </div>
        <div class="form-group">
          <label for="edit-director">Director</label>
          <input type="text" id="edit-director" class="form-control" />
        </div>
        <div class="form-group">
          <label for="edit-year">Year</label>
          <input type="text" id="edit-year" class="form-control" />
        </div>
        <div class="form-group">
          <label for="edit-rating">Rating</label>
          <input type="text" id="edit-rating" class="form-control" />
        </div>
        <div class="form-group">
          <label for="edit-poster_url">Poster URL</label>
          <input type="text" id="edit-poster_url" class="form-control" />
        </div>
        <button type="submit" class="btn btn-primary" id="update-movie">Update</button>
      </form>
    `;
    document.querySelector('#edit-title').value = movie.title;
    document.querySelector('#edit-director').value = movie.director;
    document.querySelector('#edit-year').value = movie.year;
    document.querySelector('#edit-rating').value = movie.rating;
    document.querySelector('#edit-poster_url').value = movie.poster_url;
    document.querySelector('#update-movie').addEventListener('click', ()=>{
      updateMovie(movie.id); });
  }

  const deleteMovie = id => {
    console.log('Deleting movie no.', id);
    axios.delete(`${baseURL}/${id}`)
    .then(result => {allMovies(); })
    .catch(error => {console.error(error); });
  }

  const allMovies = () => {
    document.querySelector('#app').innerHTML = `
      <div>
        <button type="button" class="btn btn-success" id="new-movie">Add a movie</button>
      </div>
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Director</th>
            <th scope="col">Year</th>
            <th scope="col">Rating</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody id="movie-tbody"></tbody>
      </table>
    `;
    document.querySelector('#new-movie').addEventListener('click', newMovie);
    axios.get( baseURL )
      .then( movies => {
        movies.data.forEach( movie => {
          const trEl = document.createElement('tr');
          trEl.innerHTML = `
            <td>${movie.title}</td>
            <td id="show-${movie.id}">${movie.title}</td>
            <td>${movie.director}</td>
            <td>${movie.year}</td>
            <td>${movie.rating}</td>
            <td><button type="button" class="btn btn-info btn-sm" id="edit-${movie.id}">Edit</button>&nbsp;<button type="button" class="btn btn-danger btn-sm" id="delete-${movie.id}">Delete</button></td>
          `;
          document.querySelector('#movie-tbody').appendChild(trEl);
          document.querySelector(`#show-${movie.id}`).addEventListener('click', () => { showMovie(movie); });
          document.querySelector(`#edit-${movie.id}`).addEventListener('click', () => { editMovie(movie); });
          document.querySelector(`#delete-${movie.id}`).addEventListener('click', () => { deleteMovie(movie.id); });
        });
      })
      .catch( error => { console.error( error ); });
  }

  document.querySelector('#app-start').addEventListener('click', allMovies);
  allMovies();
});
