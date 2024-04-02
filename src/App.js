import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import NotFount from './pages/NotFount';
import Navbar from './components/Navbar';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import Actor from './components/Actor';
import Login from './pages/Login';
import PrivateRoute from './routes/PrivateRoute';

function App() {

  const movies = [
    {
      title: "The Shawshank Redemption",
      description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjc1hdOAXX9ytz3z2wyIvV46FcLAvOPuqMdaTQGZthSQ&s",
      actors: [
        { name: "Morgan Freeman", actorImage: "https://pbs.twimg.com/profile_images/1209872683791343621/jyNHTtaD_400x400.jpg" },
        { name: "Tim Robbins", actorImage: "https://m.media-amazon.com/images/I/810qK8qKR-L._AC_UF1000,1000_QL80_.jpg" }
      ]
    },
    {
      title: "The Godfather",
      description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
      actors: [
        { name: "Morgan Freeman", actorImage: "https://pbs.twimg.com/profile_images/1209872683791343621/jyNHTtaD_400x400.jpg" },
        { name: "Tim Robbins", actorImage: "https://m.media-amazon.com/images/I/810qK8qKR-L._AC_UF1000,1000_QL80_.jpg" }
      ]
    },
    {
      title: "The Dark Knight",
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      imageUrl: "https://www.example.com/the_dark_knight.jpg"
    },
    {
      title: "Inception",
      description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      imageUrl: "https://www.example.com/inception.jpg"
    },
    {
      title: "Pulp Fiction",
      description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      imageUrl: "https://www.example.com/pulp_fiction.jpg"
    },
    {
      title: "Forrest Gump",
      description: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
      imageUrl: "https://www.example.com/forrest_gump.jpg"
    },
    {
      title: "The Matrix",
      description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      imageUrl: "https://www.example.com/the_matrix.jpg"
    },
    {
      title: "Schindler's List",
      description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
      imageUrl: "https://www.example.com/schindlers_list.jpg"
    },
    {
      title: "Fight Club",
      description: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
      imageUrl: "https://www.example.com/fight_club.jpg"
    },
    {
      title: "The Lord of the Rings: The Return of the King",
      description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      imageUrl: "https://www.example.com/lotr_return_of_the_king.jpg"
    }
  ];


  return (
    <>
      <Navbar />


      <Routes>
        <Route path="*" element={<NotFount />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/movie" element={<MovieList movies={movies} />} >
          <Route  element={<PrivateRoute />} >
            <Route path="/movie/:id" element={<MovieDetails/>} >
               <Route path="/movie/:id/actor/:actorId" element={<Actor/>} />
            </Route>
          </Route>
        </Route>
      </Routes>

    </>
  );
}

export default App;
