
export class GitHubService {
    private static baseUrl = "https://api.github.com";

    /**
     * Fetches the Octocat ASCII art greeting.
     * Proof of connectivity to the global developer network.
     */
    static async getOctocatGreeting(): Promise<string> {
        try {
            const response = await fetch(`${this.baseUrl}/octocat`, {
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28'
                }
            });
            return await response.text();
        } catch (error) {
            console.error("GitHub Signal Interrupted:", error);
            return "Connection to Octocat Node Failed.";
        }
    }

    /**
     * Gets global community activity (public events)
     * Used to simulate 'Empire Global Resonance'
     */
    static async getGlobalResonance() {
        try {
            const response = await fetch(`${this.baseUrl}/events?per_page=5`, {
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28'
                }
            });
            return await response.json();
        } catch (error) {
            return [];
        }
    }
}
