import { screen, render } from "@testing-library/react";
import RepositoriesSummary from "./RepositoriesSummary";

test("display information of repository", () => {
    const repository = {
        stargazers_count: 20,
        open_issues: 12,
        forks: 100,
        language: "Javascript",
    };
    render(<RepositoriesSummary repository={repository} />);
    for (let key in repository) {
        const value = repository[key];
        const element = screen.getByText(new RegExp(value));
        expect(element).toBeInTheDocument();
    }
});
