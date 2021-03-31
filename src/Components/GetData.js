import axios from "axios";

export default function GetData() {
	const [response, setResponse] = useState([
		{
			category: "Entertainment: Books",
			correct_answer: "Ian Fleming",
			difficulty: "easy",
			incorrect_answers: [
				"Joseph Conrad",
				"John Buchan",
				"Graham Greene",
			],
			question:
				"Which famous spy novelist wrote the childrens&#039; story &quot;Chitty-Chitty-Bang-Bang&quot;?",
			type: "multiple",
		},
	]);

	useEffect(() => {
		axios
			.get("https://opentdb.com/api.php?amount=10", {
				timeout: 5000,
			})
			.then((res) => {
				console.log("JSON loaded.");
				const results = res.data.results;
				setResponse(results);
				console.log("reference to response", response);
			})
			.catch((err) => console.log("error: ", err));
	}, [response]);
}