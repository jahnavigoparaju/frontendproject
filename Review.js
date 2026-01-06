import { useState } from "react";
import girl105 from  '../components/project pics/girlin105.jpg';
import ammaDiary from  '../components/project pics/ammadiary.jpg';
import img3 from '../components/project pics/2states.jpg';
import img4 from '../components/project pics/11 of the Best Books to Read in July.jpg';
import img5 from '../components/project pics/40 New Swoon-Worthy Romance Books 2024 - Perhaps, Maybe Not.jpg';
import img6 from '../components/project pics/400days.jpg';
import img7 from '../components/project pics/60 Great Books You Can Finish In Basically One Sitting.jpg';
import img8 from '../components/project pics/826km.jpg';
import img9 from '../components/project pics/@dimsvm.jpg';
import img10 from "../components/project pics/A Ruined Girl_ an unmissable thriller with a killer twist you won't see coming.jpg";
import img13 from '../components/project pics/Aesthetic books to read, book recommendations, books to read in 2024, dark academia books, aesthetic books_.jpg';
import img11 from '../components/project pics/Amazon_com_ I Loved You in Another Life_ 9780593524787_ Arnold, David_ Books.jpg';
import img12 from '../components/project pics/Between Love & Loathing by Shain Rose.jpg';
import img14 from '../components/project pics/Book 3 of RED QUEEN SERIES BY VICTORIA AVEYARD.jpg';
import img15 from '../components/project pics/Books I Read 💖💖.jpg';
import img16 from '../components/project pics/Chick Lit - A Telugu Novel.jpg';
import img17 from '../components/project pics/Dheera Sameere Ganga Teere.jpg';
import img18 from '../components/project pics/Do Not Disturb by Freida McFadden.jpg';
import img19 from '../components/project pics/Don’t Leave Me Alone by Kyla Sharp.jpg';
import img20 from '../components/project pics/February read.jpg';
import img21 from '../components/project pics/warmth.jpg';
import img22 from '../components/project pics/God Of War Book Cover.jpg';
import img23 from '../components/project pics/God of Malice - Rina Kent.jpg';
import img24 from '../components/project pics/things i wanted to say by monica murphy.jpg';
import img25 from '../components/project pics/It Starts.jpg';
import img26 from '../components/project pics/prerana.jpg';
import img27 from '../components/project pics/revolution.jpg';
import img28 from '../components/project pics/Goodreads.jpg';
import img29 from '../components/project pics/Hunting Adeline Book Cover.jpg';
import img30 from '../components/project pics/If Only I Had Told Her by Laura Nowlin.jpg';
import img31 from '../components/project pics/If We Ever Meet Again Book Cover.jpg';
import img32 from '../components/project pics/If the Sun Never Sets (If Love Book Two) - PDF Room_pdf.jpg';



const books = [
  {
    id: 1,
    title: "The Girl in Room 105",
    description:"Genre: Mystery, Romance, Thriller",
    image: girl105,
  },
  {
    id: 2,
    title: "Amma Diary lo koni page lu",
    description: "Genre: Autobiographical, Family Drama",
    image: ammaDiary,
  },
  {
    id: 3,
    title: "2 States",
    description: "Genre: Drama, Humor, Love",
    image: img3,
  },
  {
    id: 4,
    title: "The Trap",
    description: "Genre: Psychological Thriller, Mystery, Suspense",
    image: img4,
  },
  {
    id: 5,
    title: "A Thousand Broken Pieces",
    description: "Genre: Contemporary Fiction,Romance, Emotional Drama",
    image: img5,
  },
  {
    id: 6,
    title: "400 Days",
    description: "Genre: Mystery Thriller, Suspense driven",
    image: img6,
  },
  {
    id: 7,
    title: "November 9",
    description: "Genre: Contemporary Fiction, Young Adult",
    image: img7,
  },
  {
    id: 8,
    title: "826 KMS",
    description: "Genre: Feel good, Love story, Drama ",
    image: img8,
  },
  {
    id: 9,
    title: "Till the Last Breath",
    description: " Genre: Fictional, Suspense",
    image: img9,
  },
  {
    id: 10,
    title: "A Ruined Girl",
    description: "Genre: Romance, Drama, Contemporary Fiction",
    image: img10,
  },
  {
    id: 11,
    title: "I loved you in another life",
    description: "Genre: Love Story, Realistic Fiction",
    image: img11,
  },
  {
    id: 12,
    title: "Between Love and Loathing",
    description: "Genre: Slice of Life, Drama",
    image: img12,
  },
  {
    id: 13,
    title: "Everything I Never Told You",
    description: "Genre: Literary Fiction, Family Drama, Psychological Fiction",
    image: img13,
  },
  {
    id: 14,
    title: "King Cage",
    description: "Genre: Thriller, Crime, Suspense ",
    image: img14,
  },
  {
    id: 15,
    title: "The Power Of Habit",
    description: "Genre; Self-Help, Psychology, Non-Fiction",
    image: img15,
  },
  {
    id: 16,
    title: "Chik Let",
    description: "Genre: Chick Lit, Romance, Contemporary Fiction",
    image: img16,
  },
  {
    id: 17,
    title: "Dheera Sameerey Ganga Theerey",
    description: "Genre: Historical Fiction, Romance, Social Drama",
    image: img17,
  },
  {
    id: 18,
    title: "Do Not Disturb",
    description: "Genre: Psychological Thriller, Mystery, Suspense",
    image: img18,
  },
   {
    id: 19,
    title: "Don't Leave Me Alone",
    description: "Genre: Romance, Emotional Drama, Contemporary Fiction",
    image: img19,
  },
  {
    id: 20,
    title: "The Art of Being Alone",
    description: "Genre: Self-Help, Philosophy, Inspirational Non-Fiction",
    image: img20,
  },
   {
    id: 21,
    title: "Warmth",
    description: "Genre: Contemporary Fiction, Emotional Drama, Slice of Life",
    image: img21,
  },
   {
    id: 22,
    title: "God of War",
    description: "Genre: Action, Mythology, Fantasy",
    image: img22,
  },
   {
    id: 23,
    title: "God of Malice",
    description: "Genre: Dark Romance, Psychological Thriller, Contemporary Fiction",
    image: img23,
  },
   {
    id: 24,
    title: "Things I Wanted to Say",
    description: "Genre: Romance, Emotional Drama, Contemporary Fiction",
    image: img24,
  },
   {
    id: 25,
    title: "It starts With Us",
    description: "Genre: Romance, Contemporary Fiction, Emotional Drama",
    image: img25,
  },
   {
    id: 26,
    title: "Nithya Prerana",
    description: "Genre: Inspirational, Spiritual, Motivational",
    image: img26,
  },
   {
    id: 27,
    title: "Revolution 2020",
    description: "Genre: Romance, Political Drama, Contemporary Fiction",
    image: img27,
  },
   {
    id: 28,
    title: "Secretary",
    description: "Genre: Romance, Contemporary Fiction, Drama",
    image: img28,
  },
   {
    id: 29,
    title: "Hunting Adeline",
    description: "Genre: Dark Romance, Psychological Thriller, Crime",
    image: img29,
  },
   {
    id: 30,
    title: "If only I had told her",
    description: "Genre: Young Adult, Emotional Drama",
    image: img30,
  },
  {
    id: 31,
    title: "If we ever meet again",
    description: "Genre: Modern Fiction, Long-Distance, Emotional Drama",
    image: img31,
  },
  {
    id: 32,
    title: "If the sun never sets",
    description: "Genre: Contemporary Fiction, lice of Life, Drama",
    image: img32,
  }

];

const Review = () => {
  const [ratings, setRatings] = useState({});

  const handleRating = (id, star) => {
    setRatings({ ...ratings, [id]: star });
  };

  return (
    <div className="review-page">
      <div className="card-container">
        {books.map((book) => (
          <div className="card" key={book.id}>
            <img src={book.image} alt={book.title} />

            <div className="card-content">
              <h3>{book.title}</h3><br/>
              <p id="bookdescription">{book.description}</p>

              <div className="rating">
                {[5, 4, 3, 2, 1].map((star) => (
                  <span
                    key={star}
                    onClick={() => handleRating(book.id, star)}
                    style={{
                      color:
                        star <= (ratings[book.id] || 0)
                          ? "gold"
                          : "#ccc",
                    }}
                  >
                    ★
                  </span>
                ))}
              </div>

              <button>Submit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
