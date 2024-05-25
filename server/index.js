 // server.js
const express = require('express');
const router = express();
const port = 3004;
const axios = require('axios');
const { MongoClient } = require('mongodb');
const cors = require('cors');
var cheerio = require('cheerio');


router.use(cors());

//adding for cricbuzz ---->


// async function test2(){
//   const options = {
//     method: 'GET',
//   url: 'https://cricbuzz-cricket.p.rapidapi.com/teams/v1/international',
//   headers: {
//     'x-rapidapi-key': '344823b5dfmsh8872138f31cf6fdp13652fjsn5dcc71357926',
//     'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
//   }
//   };

//   try {
//     const response = await axios.request(options);
//     const dataToStore = response.data;

//     // Connect to MongoDB Atlas
//     const client = new MongoClient('mongodb+srv://useretheharsh2211:OzNWox1s1aWCPwWE@cluster0.c1jnz5h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
//     await client.connect();

//     const db = client.db('cricbuzzz'); // Specify your database name here
//     const collection = db.collection('teamList'); // Specify your collection name here

//     // Check if there's already an object in the collection
//     const existingObject = await collection.findOne({});
    
//     if (existingObject) {
//       // Update the existing object
//       await collection.replaceOne({}, dataToStore);
//     } else {
//       // Insert the data into MongoDB
//       await collection.insertOne(dataToStore);
//     }

//     client.close(); // Close the MongoDB connection

//   } catch (error) {
//     console.log(error);
//   }
// }

// async function test3(){
//   const options = {
//     method: 'GET',
//     url: 'https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/trending',
//     headers: {
//       'x-rapidapi-key': '344823b5dfmsh8872138f31cf6fdp13652fjsn5dcc71357926',
//       'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
//     }
//   };

//   try {
//     const response = await axios.request(options);
//     const dataToStore = response.data;

//     // Connect to MongoDB Atlas
//     const client = new MongoClient('mongodb+srv://useretheharsh2211:OzNWox1s1aWCPwWE@cluster0.c1jnz5h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
//     await client.connect();

//     const db = client.db('cricbuzzz'); // Specify your database name here
//     const collection = db.collection('playerListTrending'); // Specify your collection name here

//     // Check if there's already an object in the collection
//     const existingObject = await collection.findOne({});
    
//     if (existingObject) {
//       // Update the existing object
//       await collection.replaceOne({}, dataToStore);
//     } else {
//       // Insert the data into MongoDB
//       await collection.insertOne(dataToStore);
//     }

//     client.close(); // Close the MongoDB connection

//   } catch (error) {
//     console.log(error);
//   }
// }

async function test4(){
    const options = {
      method: 'GET',
    url: 'https://cricbuzz-cricket.p.rapidapi.com/photos/v1/index',
    headers: {
      'x-rapidapi-key': '344823b5dfmsh8872138f31cf6fdp13652fjsn5dcc71357926',
      'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
    }
    };
  
    try {
      const response = await axios.request(options);
      const dataToStore = response.data;
  
      // Connect to MongoDB Atlas
      const client = new MongoClient('mongodb+srv://useretheharsh2211:OzNWox1s1aWCPwWE@cluster0.c1jnz5h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
      await client.connect();
  
      const db = client.db('cricbuzzz'); // Specify your database name here
      const collection = db.collection('photoList'); // Specify your collection name here
  
      // Check if there's already an object in the collection
      const existingObject = await collection.findOne({});
      
      if (existingObject) {
        // Update the existing object
        await collection.replaceOne({}, dataToStore);
      } else {
        // Insert the data into MongoDB
        await collection.insertOne(dataToStore);
      }
  
      client.close(); // Close the MongoDB connection
  
    } catch (error) {
      console.log(error);
    }
  }
  
  // async function test5(){
  //   const options = {
  //     method: 'GET',
  //     url: 'https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/batsmen',
  //     params: {formatType: 'test'},
  //     headers: {
  //       'x-rapidapi-key': '344823b5dfmsh8872138f31cf6fdp13652fjsn5dcc71357926',
  //       'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
  //     }
  //   };
  
  //   try {
  //     const response = await axios.request(options);
  //     const dataToStore = response.data;
  
  //     // Connect to MongoDB Atlas
  //     const client = new MongoClient('mongodb+srv://useretheharsh2211:OzNWox1s1aWCPwWE@cluster0.c1jnz5h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
  //     await client.connect();
  
  //     const db = client.db('cricbuzzz'); // Specify your database name here
  //     const collection = db.collection('iccTestRankingBat'); // Specify your collection name here
  
  //     // Check if there's already an object in the collection
  //     const existingObject = await collection.findOne({});
      
  //     if (existingObject) {
  //       // Update the existing object
  //       await collection.replaceOne({}, dataToStore);
  //     } else {
  //       // Insert the data into MongoDB
  //       await collection.insertOne(dataToStore);
  //     }
  
  //     client.close(); // Close the MongoDB connection
  
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  
  async function test6(){
    const options = {
      method: 'GET',
      url: 'https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/bowlers',
      params: {formatType: 'test'},
      headers: {
        'x-rapidapi-key': '344823b5dfmsh8872138f31cf6fdp13652fjsn5dcc71357926',
        'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
      }
    };
  
    try {
      const response = await axios.request(options);
      const dataToStore = response.data;
  
      // Connect to MongoDB Atlas
      const client = new MongoClient('mongodb+srv://useretheharsh2211:OzNWox1s1aWCPwWE@cluster0.c1jnz5h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
      await client.connect();
  
      const db = client.db('cricbuzzz'); // Specify your database name here
      const collection = db.collection('iccTestRankingBowlers'); // Specify your collection name here
  
      // Check if there's already an object in the collection
      const existingObject = await collection.findOne({});
      
      if (existingObject) {
        // Update the existing object
        await collection.replaceOne({}, dataToStore);
      } else {
        // Insert the data into MongoDB
        await collection.insertOne(dataToStore);
      }
  
      client.close(); // Close the MongoDB connection
  
    } catch (error) {
      console.log(error);
    }
  }
  
  // async function test7(){
  //   const options = {
  //     method: 'GET',
  //     url: 'https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/allrounders',
  //     params: {formatType: 'test'},
  //     headers: {
  //       'x-rapidapi-key': '344823b5dfmsh8872138f31cf6fdp13652fjsn5dcc71357926',
  //       'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
  //     }
  //   };
  
  //   try {
  //     const response = await axios.request(options);
  //     const dataToStore = response.data;
  
  //     // Connect to MongoDB Atlas
  //     const client = new MongoClient('mongodb+srv://useretheharsh2211:OzNWox1s1aWCPwWE@cluster0.c1jnz5h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
  //     await client.connect();
  
  //     const db = client.db('cricbuzzz'); // Specify your database name here
  //     const collection = db.collection('iccTestRankingAllRounders'); // Specify your collection name here
  
  //     // Check if there's already an object in the collection
  //     const existingObject = await collection.findOne({});
      
  //     if (existingObject) {
  //       // Update the existing object
  //       await collection.replaceOne({}, dataToStore);
  //     } else {
  //       // Insert the data into MongoDB
  //       await collection.insertOne(dataToStore);
  //     }
  
  //     client.close(); // Close the MongoDB connection
  
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  
  async function test8(){
    const options = {
      method: 'GET',
    url: 'https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/teams',
    params: {formatType: 'test'},
    headers: {
      'x-rapidapi-key': '344823b5dfmsh8872138f31cf6fdp13652fjsn5dcc71357926',
      'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
    }
    };
  
    try {
      const response = await axios.request(options);
      const dataToStore = response.data;
  
      // Connect to MongoDB Atlas
      const client = new MongoClient('mongodb+srv://useretheharsh2211:OzNWox1s1aWCPwWE@cluster0.c1jnz5h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
      await client.connect();
  
      const db = client.db('cricbuzzz'); // Specify your database name here
      const collection = db.collection('iccTestRankingTeams'); // Specify your collection name here
  
      // Check if there's already an object in the collection
      const existingObject = await collection.findOne({});
      
      if (existingObject) {
        // Update the existing object
        await collection.replaceOne({}, dataToStore);
      } else {
        // Insert the data into MongoDB
        await collection.insertOne(dataToStore);
      }
  
      client.close(); // Close the MongoDB connection
  
    } catch (error) {
      console.log(error);
    }
  }
  
  async function test9(){
    const options = {
      method: 'GET',
    url: 'https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/batsmen',
    params: {formatType: 't20'},
    headers: {
      'x-rapidapi-key': '344823b5dfmsh8872138f31cf6fdp13652fjsn5dcc71357926',
      'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
    }
    };
  
    try {
      const response = await axios.request(options);
      const dataToStore = response.data;
  
      // Connect to MongoDB Atlas
      const client = new MongoClient('mongodb+srv://useretheharsh2211:OzNWox1s1aWCPwWE@cluster0.c1jnz5h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
      await client.connect();
  
      const db = client.db('cricbuzzz'); // Specify your database name here
      const collection = db.collection('iccT20RankingBat'); // Specify your collection name here
  
      // Check if there's already an object in the collection
      const existingObject = await collection.findOne({});
      
      if (existingObject) {
        // Update the existing object
        await collection.replaceOne({}, dataToStore);
      } else {
        // Insert the data into MongoDB
        await collection.insertOne(dataToStore);
      }
  
      client.close(); // Close the MongoDB connection
  
    } catch (error) {
      console.log(error);
    }
  }
  
  // async function test10(){
  //   const options = {
  //     method: 'GET',
  //     url: 'https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/bowlers',
  //     params: {formatType: 't20'},
  //     headers: {
  //       'x-rapidapi-key': '344823b5dfmsh8872138f31cf6fdp13652fjsn5dcc71357926',
  //       'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
  //     }
  //   };
  
  //   try {
  //     const response = await axios.request(options);
  //     const dataToStore = response.data;
  
  //     // Connect to MongoDB Atlas
  //     const client = new MongoClient('mongodb+srv://useretheharsh2211:OzNWox1s1aWCPwWE@cluster0.c1jnz5h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
  //     await client.connect();
  
  //     const db = client.db('cricbuzzz'); // Specify your database name here
  //     const collection = db.collection('iccT20RankingBowlers'); // Specify your collection name here
  
  //     // Check if there's already an object in the collection
  //     const existingObject = await collection.findOne({});
      
  //     if (existingObject) {
  //       // Update the existing object
  //       await collection.replaceOne({}, dataToStore);
  //     } else {
  //       // Insert the data into MongoDB
  //       await collection.insertOne(dataToStore);
  //     }
  
  //     client.close(); // Close the MongoDB connection
  
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  
  // async function test11(){
  //   const options = {
  //     method: 'GET',
  //     url: 'https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/allrounders',
  //     params: {formatType: 't20'},
  //     headers: {
  //       'x-rapidapi-key': '344823b5dfmsh8872138f31cf6fdp13652fjsn5dcc71357926',
  //       'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
  //     }
  //   };
  
  //   try {
  //     const response = await axios.request(options);
  //     const dataToStore = response.data;
  
  //     // Connect to MongoDB Atlas
  //     const client = new MongoClient('mongodb+srv://useretheharsh2211:OzNWox1s1aWCPwWE@cluster0.c1jnz5h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
  //     await client.connect();
  
  //     const db = client.db('cricbuzzz'); // Specify your database name here
  //     const collection = db.collection('iccT20RankingAllRounders'); // Specify your collection name here
  
  //     // Check if there's already an object in the collection
  //     const existingObject = await collection.findOne({});
      
  //     if (existingObject) {
  //       // Update the existing object
  //       await collection.replaceOne({}, dataToStore);
  //     } else {
  //       // Insert the data into MongoDB
  //       await collection.insertOne(dataToStore);
  //     }
  
  //     client.close(); // Close the MongoDB connection
  
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  
  async function test11(){
    const options = {
      method: 'GET',
    url: 'https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/teams',
    params: {formatType: 't20'},
    headers: {
      'x-rapidapi-key': '344823b5dfmsh8872138f31cf6fdp13652fjsn5dcc71357926',
      'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
    }
    };
  
    try {
      const response = await axios.request(options);
      const dataToStore = response.data;
  
      // Connect to MongoDB Atlas
      const client = new MongoClient('mongodb+srv://useretheharsh2211:OzNWox1s1aWCPwWE@cluster0.c1jnz5h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
      await client.connect();
  
      const db = client.db('cricbuzzz'); // Specify your database name here
      const collection = db.collection('iccT20RankingTeams'); // Specify your collection name here
  
      // Check if there's already an object in the collection
      const existingObject = await collection.findOne({});
      
      if (existingObject) {
        // Update the existing object
        await collection.replaceOne({}, dataToStore);
      } else {
        // Insert the data into MongoDB
        await collection.insertOne(dataToStore);
      }
  
      client.close(); // Close the MongoDB connection
  
    } catch (error) {
      console.log(error);
    }
  }
  
  async function test12(){
    const options = {
      method: 'GET',
    url: 'https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/batsmen',
    params: {formatType: 'odi'},
    headers: {
      'x-rapidapi-key': '344823b5dfmsh8872138f31cf6fdp13652fjsn5dcc71357926',
      'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
    }
    };
  
    try {
      const response = await axios.request(options);
      const dataToStore = response.data;
  
      // Connect to MongoDB Atlas
      const client = new MongoClient('mongodb+srv://useretheharsh2211:OzNWox1s1aWCPwWE@cluster0.c1jnz5h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
      await client.connect();
  
      const db = client.db('cricbuzzz'); // Specify your database name here
      const collection = db.collection('iccODIRankingBat'); // Specify your collection name here
  
      // Check if there's already an object in the collection
      const existingObject = await collection.findOne({});
      
      if (existingObject) {
        // Update the existing object
        await collection.replaceOne({}, dataToStore);
      } else {
        // Insert the data into MongoDB
        await collection.insertOne(dataToStore);
      }
  
      client.close(); // Close the MongoDB connection
  
    } catch (error) {
      console.log(error);
    }
  }
  
  async function test13(){
    const options = {
      method: 'GET',
    url: 'https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/bowlers',
    params: {formatType: 'odi'},
    headers: {
      'x-rapidapi-key': '344823b5dfmsh8872138f31cf6fdp13652fjsn5dcc71357926',
      'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
    }
    };
  
    try {
      const response = await axios.request(options);
      const dataToStore = response.data;
  
      // Connect to MongoDB Atlas
      const client = new MongoClient('mongodb+srv://useretheharsh2211:OzNWox1s1aWCPwWE@cluster0.c1jnz5h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
      await client.connect();
  
      const db = client.db('cricbuzzz'); // Specify your database name here
      const collection = db.collection('iccODIRankingBowlers'); // Specify your collection name here
  
      // Check if there's already an object in the collection
      const existingObject = await collection.findOne({});
      
      if (existingObject) {
        // Update the existing object
        await collection.replaceOne({}, dataToStore);
      } else {
        // Insert the data into MongoDB
        await collection.insertOne(dataToStore);
      }
  
      client.close(); // Close the MongoDB connection
  
    } catch (error) {
      console.log(error);
    }
  }
  
  async function test14(){
    const options = {
      method: 'GET',
    url: 'https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/allrounders',
    params: {formatType: 'odi'},
    headers: {
      'x-rapidapi-key': '344823b5dfmsh8872138f31cf6fdp13652fjsn5dcc71357926',
      'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
    }
    };
  
    try {
      const response = await axios.request(options);
      const dataToStore = response.data;
  
      // Connect to MongoDB Atlas
      const client = new MongoClient('mongodb+srv://useretheharsh2211:OzNWox1s1aWCPwWE@cluster0.c1jnz5h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
      await client.connect();
  
      const db = client.db('cricbuzzz'); // Specify your database name here
      const collection = db.collection('iccODIRankingAllRounders'); // Specify your collection name here
  
      // Check if there's already an object in the collection
      const existingObject = await collection.findOne({});
      
      if (existingObject) {
        // Update the existing object
        await collection.replaceOne({}, dataToStore);
      } else {
        // Insert the data into MongoDB
        await collection.insertOne(dataToStore);
      }
  
      client.close(); // Close the MongoDB connection
  
    } catch (error) {
      console.log(error);
    }
  }
  
  async function test15(){
    const options = {
      method: 'GET',
    url: 'https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/teams',
    params: {formatType: 'odi'},
    headers: {
      'x-rapidapi-key': '344823b5dfmsh8872138f31cf6fdp13652fjsn5dcc71357926',
      'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
    }
    };
  
    try {
      const response = await axios.request(options);
      const dataToStore = response.data;
  
      // Connect to MongoDB Atlas
      const client = new MongoClient('mongodb+srv://useretheharsh2211:OzNWox1s1aWCPwWE@cluster0.c1jnz5h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
      await client.connect();
  
      const db = client.db('cricbuzzz'); // Specify your database name here
      const collection = db.collection('iccODIRankingTeams'); // Specify your collection name here
  
      // Check if there's already an object in the collection
      const existingObject = await collection.findOne({});
      
      if (existingObject) {
        // Update the existing object
        await collection.replaceOne({}, dataToStore);
      } else {
        // Insert the data into MongoDB
        await collection.insertOne(dataToStore);
      }
  
      client.close(); // Close the MongoDB connection
  
    } catch (error) {
      console.log(error);
    }
  }
  
  async function test16(){
    const options = {
      method: 'GET',
  url: 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/live',
  headers: {
    'x-rapidapi-key': 'c4eec97ea5mshf0444732d393e82p1a9345jsn8621e9a162c7',
    'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
  }
    };
  
    try {
      const response = await axios.request(options);
      const dataToStore = response.data;
  
      // Connect to MongoDB Atlas
      const client = new MongoClient('mongodb+srv://useretheharsh2211:OzNWox1s1aWCPwWE@cluster0.c1jnz5h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
      await client.connect();
  
      const db = client.db('cricbuzzz'); // Specify your database name here
      const collection = db.collection('liveMatch'); // Specify your collection name here
  
      // Check if there's already an object in the collection
      const existingObject = await collection.findOne({});
      
      if (existingObject) {
        // Update the existing object
        await collection.replaceOne({}, dataToStore);
      } else {
        // Insert the data into MongoDB
        await collection.insertOne(dataToStore);
      }
  
      client.close(); // Close the MongoDB connection
  
    } catch (error) {
      console.log(error);
    }
  }


  async function test17(){
    const options = {
      method: 'GET',
      url: 'https://cricbuzz-cricket.p.rapidapi.com/series/v1/7476',
      headers: {
        'x-rapidapi-key': 'c4eec97ea5mshf0444732d393e82p1a9345jsn8621e9a162c7',
        'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
      }
    };
  
    try {
      const response = await axios.request(options);
      const dataToStore = response.data;
  
      // Connect to MongoDB Atlas
      const client = new MongoClient('mongodb+srv://useretheharsh2211:OzNWox1s1aWCPwWE@cluster0.c1jnz5h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
      await client.connect();
  
      const db = client.db('cricbuzzz'); // Specify your database name here
      const collection = db.collection('t20wccfixture'); // Specify your collection name here
  
      // Check if there's already an object in the collection
      const existingObject = await collection.findOne({});
      
      if (existingObject) {
        // Update the existing object
        await collection.replaceOne({}, dataToStore);
      } else {
        // Insert the data into MongoDB
        await collection.insertOne(dataToStore);
      }
  
      client.close(); // Close the MongoDB connection
  
    } catch (error) {
      console.log(error);
    }
  }


// Middleware to parse JSON bodies
router.use(express.json());

// Middleware to log request details
router.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Define a simple route
router.get('/', (req, res) => {
  res.send('Hello, World!');
});


router.get('/api/schedules', async function(req, res) {
    try {
        const user = await req.user;
        // Connection URI for MongoDB
        const uri = "mongodb+srv://useretheharsh2211:OzNWox1s1aWCPwWE@cluster0.c1jnz5h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
        
         // Create a new MongoClient
         const client = new MongoClient(uri);
        
        // Connect to the MongoDB server
         await client.connect();
        
         // Access the database and collection
         const database = client.db('cricbuzzz');
         const collection = database.collection('schedules');
        
        // Fetch data from MongoDB
        const data = await collection.find({}).toArray();
        const filteredData = data[0].matchScheduleMap;
        
         // Close the connection to the MongoDB server
         await client.close();
  
        res.json(filteredData)
     } catch (error) {
         console.error("Error fetching data from MongoDB:", error);
         res.status(500).json({ error: "Internal server error" });
     }
   });

   router.get('/api/recentmatch', async function(req, res) {
    try {
        const user = await req.user;
        // Connection URI for MongoDB
        const uri = "mongodb+srv://useretheharsh2211:OzNWox1s1aWCPwWE@cluster0.c1jnz5h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
        
         // Create a new MongoClient
         const client = new MongoClient(uri);
        
        // Connect to the MongoDB server
         await client.connect();
        
         // Access the database and collection
         const database = client.db('cricbuzzz');
         const collection = database.collection('recentMatch');
        
        // Fetch data from MongoDB
        const data = await collection.find({}).toArray();
        const filteredData = data[0].typeMatches[0].seriesMatches;
        
         // Close the connection to the MongoDB server
         await client.close();
  
        res.json(filteredData)
     } catch (error) {
         console.error("Error fetching data from MongoDB:", error);
         res.status(500).json({ error: "Internal server error" });
     }
   });

   router.get('/api/t20wccfixture', async function(req, res) {
    try {
        const user = await req.user;
        // Connection URI for MongoDB
        const uri = "mongodb+srv://useretheharsh2211:OzNWox1s1aWCPwWE@cluster0.c1jnz5h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
        
         // Create a new MongoClient
         const client = new MongoClient(uri);
        
        // Connect to the MongoDB server
         await client.connect();
        
         // Access the database and collection
         const database = client.db('cricbuzzz');
         const collection = database.collection('t20wccfixture');
        
        // Fetch data from MongoDB
        const data = await collection.find({}).toArray();
        const filteredData = data[0].matchDetails;
        
         // Close the connection to the MongoDB server
         await client.close();
  
        res.json(filteredData)
     } catch (error) {
         console.error("Error fetching data from MongoDB:", error);
         res.status(500).json({ error: "Internal server error" });
     }
   });


   //-----------------------------------WEB SCRAPING--------------------------------------------
   async function scrapePopularStadiums() {
    try {
        const response = await axios.get('https://www.cricket.com/stadiums');
        const html = response.data;
        const $ = cheerio.load(html);

        const stadiums = [];

        $('.swiper-slide').each((index, element) => {
            const name = $(element).find('.text-sm.font-semibold').text().trim();
            const location = $(element).find('.text-xs.font-normal').text().trim();
            const imageUrl = $(element).find('img').attr('src');
            const link = $(element).find('a').attr('href');

            const stadium = {
                name,
                location,
                imageUrl,
                link
            };

            stadiums.push(stadium);
        });

        return stadiums;
    } catch (error) {
        console.error('Error:', error);
    }
}

async function scrapeIconicStadiums() {
  try {
      const response = await axios.get('https://www.cricket.com/stadiums');
      const html = response.data;
      const $ = cheerio.load(html);

      const stadiums = [];

      $('.swiper-slide').each((index, element) => {
          const name = $(element).find('.flex.flex-col.md\\:text-sm > p:nth-child(1)').text().trim();
          const location = $(element).find('.flex.flex-col.md\\:text-sm > p:nth-child(2)').text().trim();
          const imageUrl = $(element).find('img').attr('src');
          const link = $(element).find('a').attr('href');

          const stadium = {
              name,
              location,
              imageUrl,
              link: link
          };

          stadiums.push(stadium);
      });

      return stadiums;
  } catch (error) {
      console.error('Error:', error);
  }
}
async function scrapeCricketTeams() {
  try {
      const response = await axios.get('https://www.cricket.com/teams/international');
      const html = response.data;
      const $ = cheerio.load(html);

      const teams = [];

      $('.md\\:grid-cols-4 .max-w-sm').each((index, element) => {
          const teamName = $(element).find('h5').text().trim();
          const imageUrl = $(element).find('.object-cover').attr('src');
          const testRanking = $(element).find('.flex.flex-col p:contains("TEST") + p').text().trim();
          const odiRanking = $(element).find('.flex.flex-col p:contains("ODI") + p').text().trim();
          const t20Ranking = $(element).find('.flex.flex-col p:contains("T20") + p').text().trim();

          const team = {
              teamName,
              imageUrl,
              iccRankings: {
                  test: testRanking,
                  odi: odiRanking,
                  t20: t20Ranking
              }
          };

          teams.push(team);
      });

      return teams;
  } catch (error) {
      console.error('Error:', error);
  }
}


// Route to get popular stadiums
router.get('/api/popularstadium', async (req, res) => {
  const stadiums = await scrapePopularStadiums();
  res.json(stadiums);
});

// Route to get iconic stadiums
router.get('/api/iconicstadium', async (req, res) => {
  const stadiums = await scrapeIconicStadiums();
  res.json(stadiums);
});

router.get('/api/teams', async (req, res) => {
  const teams = await scrapeCricketTeams();
  res.json(teams);
});
// Start the server
router.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
