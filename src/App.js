import './App.css';


function App() {
  return (
    <ul className="recipe-list">
      <li className="recipe-card">
        <img src="https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg" alt="Smoked salmon burger" />
        <h2>Smoked salmon burger</h2>
        <div className="info">
          <span>20 min</span>
          <span>6 servings</span>
          <span>210 calories</span>
        </div>
        <div className="difficulty">
          <h3>Difficulty</h3>
          <div className="difficulty-buttons">
            <button className="easy">Easy</button>
            <button>Medium</button>
            <button>Hard</button>
          </div>
        </div>
      </li>

      <li className="recipe-card">
        <img src="https://alexandracooks.com/wp-content/uploads/2021/09/bakedtomatoesandfeta_alexandraskitchen.jpg" alt="Tomatoes With Creamy Feta" />
        <h2>Tomatoes With Creamy Feta</h2>
        <div className="info">
          <span>15 min</span>
          <span>3 servings</span>
          <span>600 calories</span>
        </div>
        <div className="difficulty">
          <h3>Difficulty</h3>
          <div className="difficulty-buttons">
            <button className="easy">Easy</button>
            <button>Medium</button>
            <button>Hard</button>
          </div>
        </div>
      </li>

      <li className="recipe-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVYuwv_AahrjrMzH7drx7jKlKAaX3NOxWzw&s" alt="Spicy Potato Salad" />
        <h2>Spicy Potato Salad</h2>
        <div className="info">
          <span>30 min</span>
          <span>2 servings</span>
          <span>320 calories</span>
        </div>
        <div className="difficulty">
          <h3>Difficulty</h3>
          <div className="difficulty-buttons">
            <button>Easy</button>
            <button className="easy">Medium</button>
            <button>Hard</button>
          </div>
        </div>
      </li>

      <li className="recipe-card">
        <img src="https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/chicken-biryani-recipe.jpg" alt="Chicken Biryani" />
        <h2>Chicken Biryani</h2>
        <div className="info">
          <span>40 min</span>
          <span>4 servings</span>
          <span>700 calories</span>
        </div>
        <div className="difficulty">
          <h3>Difficulty</h3>
          <div className="difficulty-buttons">
            <button>Easy</button>
            <button>Medium</button>
            <button className="easy">Hard</button>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default App;
