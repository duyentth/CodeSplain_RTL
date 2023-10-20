import {screen, render} from "@testing-library/react";
import RepositoriesSummary from "./RepositoriesSummary";

test("primary language should be shown on screen", () => {
    const repository = { stargazers_count: 20, 
        open_issues: 2, forks: 100 , language: "Javascript"};
    render(<RepositoriesSummary repository ={repository}/>);
    const language = screen.getByText(/Javascrip/i);
    expect(language).toBeInTheDocument();
});