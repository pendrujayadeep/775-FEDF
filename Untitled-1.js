<!DOCTYPE html>
<html>
<head>
    <title>Movie Review App</title>
    <style>
        body { font-family: Arial; padding: 20px; }
        .card { border: 1px solid #000; padding: 10px; margin-top: 20px; }
        input { margin: 5px 0; padding: 5px; width: 200px; }
        button { padding: 5px 10px; }
    </style>
</head>
<body>

<h1>Movie Review App</h1>

<h3>Add Movie</h3>
<input id="movieTitle" placeholder="Movie Title"><br>
<input id="movieRating" placeholder="Rating 1–5"><br>
<button onclick="addMovie()">Add Movie</button>

<hr>

<h2>Movie List</h2>
<div id="movieList"></div>

<script>
    let movies = [
        { title: "Avatar", rating: 5 },
        { title: "Inception", rating: 4 }
    ];

    function showMovies() {
        document.getElementById("movieList").innerHTML =
        movies.map(m => `
            <div class="card">
                <h3>${m.title}</h3>
                <p>Rating: ⭐ ${m.rating}</p>
            </div>
        `).join("");
    }

    function addMovie() {
        let title = document.getElementById("movieTitle").value;
        let rating = document.getElementById("movieRating").value;

        if (!title || !rating) {
            alert("Please fill all fields!");
            return;
        }

        movies.push({ title, rating });
        showMovies();
    }

    showMovies();
</script>

</body>
</html>
