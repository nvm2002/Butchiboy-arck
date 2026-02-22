
import os
import subprocess
import sys

def run_simulator():
    print("\x1b[35m%s\x1b[0m" % "🚀 BUTCH COMMUNITY SIGNAL: Automated Author Check Simulator")
    print("\x1b[36m%s\x1b[0m" % "📡 Simulating GitHub Actions Environment for Barangay 12...")

    # Set mock environment variables
    env = os.environ.copy()
    env["GITHUB_TOKEN"] = "MOCK_TOKEN_SIGNAL_ACTIVE"
    env["USERNAME"] = "ButchLoyalist2002"
    env["OWNER"] = "nvm2002"
    env["REPO"] = "Butchiboy-arck"
    env["CURRENT_DISCUSSION_NUMBER"] = "1"
    
    # We also need to mock GITHUB_OUTPUT to avoid errors if the script tries to write to it
    mock_output_path = os.path.join(os.getcwd(), "mock_github_output.txt")
    with open(mock_output_path, "w") as f:
        f.write("")
    env["GITHUB_OUTPUT"] = mock_output_path

    script_path = "community/.github/workflows/scripts/first_time_discussion_author_live.py"
    
    print("\x1b[90m%s\x1b[0m" % f"[EXEC] Running {script_path} in Simulation Mode...")
    
    try:
        # Since the script uses urllib, a mock token will cause a 401/403 if it actually hits the API.
        # But we want to show the logic.
        result = subprocess.run(
            [sys.executable, script_path],
            env=env,
            capture_output=True,
            text=True
        )
        
        print("\n\x1b[1m--- SIMULATION LOGS ---\x1b[0m")
        print(result.stdout)
        if result.stderr:
            print("\x1b[31m%s\x1b[0m" % "--- ERRORS ---")
            print(result.stderr)
            
        print("\x1b[32m%s\x1b[0m" % "✅ Simulation Cycle Complete.")
        
    except Exception as e:
        print("\x1b[31m%s\x1b[0m" % f"❌ Logic Failure: {str(e)}")

if __name__ == "__main__":
    run_simulator()
