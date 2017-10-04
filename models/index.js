const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/name',{
  logging: false
})


let Place = db.define('place',{
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false
  },
  location: {
    type: Sequelize.ARRAY(Sequelize.FLOAT),
    allowNull: false
  }
})

let Hotel = db.define('hotel',{
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  num_stars: {
    type: Sequelize.FLOAT,
    validate: {
      min: 1,
      max: 5
    },
    allowNull: false
  },
  amenities: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

let Activity = db.define('activity',{
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age_range: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

let Restaurant = db.define('restaurant',{
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cuisine: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
      max: 5
    },
    allowNull: false
  }
})

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

module.exports = {
  db: db,
  Place: Place,
  Hotel: Hotel,
  Activity: Activity,
  Restaurant: Restaurant
}
