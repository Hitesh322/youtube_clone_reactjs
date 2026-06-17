import React from "react";
import "./App.css";

function App() {
	  return (
		      <div>
		        {/* Navbar */}
		        <div style={styles.navbar}>
		          <h2 style={{ color: "red" }}>YouTube Clone</h2>
		          <input style={styles.search} placeholder="Search" />
		        </div>

		        <div style={styles.container}>
		          
		          {/* Sidebar */}
		          <div style={styles.sidebar}>
		            <p>Home</p>
		            <p>Trending</p>
		            <p>Subscriptions</p>
		          </div>

		          {/* Video Grid */}
		          <div style={styles.videos}>
		            
		            {[1,2,3,4,5,6,7,8,9].map((item) => (
				                <div key={item} style={styles.card}>
				                  <div style={styles.thumbnail}></div>
				                  <p>Video Title {item}</p>
				                </div>
				              ))}

		          </div>

		        </div>
		      </div>
		    );
}

const styles = {
	  navbar: {
		      height: "60px",
		      display: "flex",
		      justifyContent: "space-between",
		      alignItems: "center",
		      padding: "0 20px",
		      borderBottom: "1px solid #ccc"
		    },
	  search: {
		      width: "300px",
		      padding: "8px"
		    },
	  container: {
		      display: "flex"
		    },
	  sidebar: {
		      width: "200px",
		      padding: "10px",
		      borderRight: "1px solid #ccc"
		    },
	  videos: {
		      display: "grid",
		      gridTemplateColumns: "repeat(3, 1fr)",
		      gap: "10px",
		      padding: "10px",
		      flex: 1
		    },
	  card: {
		      border: "1px solid #ddd",
		      padding: "10px"
		    },
	  thumbnail: {
		      height: "120px",
		      background: "#999"
		    }
};

export default App;
