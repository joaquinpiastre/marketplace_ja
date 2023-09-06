import React from "react"

export const Categories = () => {
  return (
    <section class="categories">
      <h2>Categorías populares</h2>
      <div class="category-list">
        <div class="category">
          <img src="https://www.megautos.com/wp-content/uploads/2017/08/VW-Gol-2017-frente.jpg" alt="AUTOS"/>
          <a href="#">AUTOS</a>
        </div>
        <div class="category">
          <img src="https://assets.xboxservices.com/assets/c3/ec/c3ec2eb8-5e51-4d82-a601-41d00a5e735b.jpg?n=SC_Content-Placement-0_1256900_788x444.jpg" alt="CONSOLAS"/>
          <a href="#">CONSOLAS</a>
        </div>
        <div class="category">
          <img src="category3.jpg" alt="Categoría 3"/>
          <a href="#">Categoría 3</a>
        </div>
        <div class="category">
          <img src="category4.jpg" alt="Categoría 4"/>
          <a href="#">Categoría 4</a>
        </div>
      </div>
    </section>
  )
}

export default Categories
