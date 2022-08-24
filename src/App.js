import Row from "./Row";
import requests from "./requests";
import Nav from "./Nav";
import Banner from "./Banner";
import "./index.css";
import "./App.css";


function App() {
	return (
		<>
			<div className="App">
				<Nav />
				<Banner />

				<Row
					title="NETFLIX ORIGINALS"
					fetchUrl={requests.fetchNetflixOrginals}
					isLargeRow
				/>
				<Row
					title="Trending Now"
					fetchUrl={requests.fetchTrending}
				/>
				<Row
					title="Top Rated"
					fetchUrl={requests.fetchTopRatedMovies}
				/>
				<Row
					title="Action Movie"
					fetchUrl={requests.fetchActionMovies}
				/>
				<Row
					title="Comedy Movie"
					fetchUrl={requests.fetchComedyMovies}
				/>
				<Row
					title="Horror Movie"
					fetchUrl={requests.fetchHorrorMovies}
				/>
				<Row
					title="Romance Movie"
					fetchUrl={requests.fetchRomanceMovies}
				/>
				<Row
					title="Documentary Movies"
					fetchUrl={requests.fetchDocumentaries}
				/>
			</div>
		</>
	);
}

export default App;
