const businessProblems = {
    sole_proprietorship: ["Cash Flow Issues", "Work-Life Balance"],
    llc: ["Scaling Challenges", "Tax Management"],
    nonprofit: ["Donor Retention", "Funding Shortfalls"],
    c_corp: ["High Operational Costs", "Employee Retention"],
    s_corp: ["Regulatory Compliance", "Ownership Restrictions"],
    partnership: ["Decision Conflicts", "Profit Distribution"],
    franchise: ["Brand Control", "Franchisee Management"],
  };
  
  const solutions = {
    "Cash Flow Issues": ["Create a budget plan.", "Negotiate better vendor terms."],
    "Work-Life Balance": ["Set boundaries.", "Delegate tasks effectively."],
  };
  
  const steps = {
    "Cash Flow Issues": ["Monitor expenses weekly.", "Establish emergency funds."],
    "Work-Life Balance": ["Block time for rest.", "Schedule regular breaks."],
  };
  
  document.getElementById('businessType').addEventListener('change', function () {
    const businessType = this.value;
    const problemType = document.getElementById('problemType');
    problemType.innerHTML = '<option value="">Choose a problem</option>';
  
    if (businessProblems[businessType]) {
      businessProblems[businessType].forEach(problem => {
        const option = document.createElement('option');
        option.value = problem;
        option.textContent = problem;
        problemType.appendChild(option);
      });
    }
  });
  
  document.getElementById('generateButton').addEventListener('click', function () {
    const problem = document.getElementById('problemType').value;
    const solutionBox = document.getElementById('solutionBox');
    const stepsBox = document.getElementById('stepsBox');
  
    solutionBox.innerHTML = '<h3>Consulting Solution</h3>';
    stepsBox.innerHTML = '<h3>Steps to Improve</h3>';
  
    if (solutions[problem]) {
      solutions[problem].forEach(solution => {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.textContent = solution;
        solutionBox.appendChild(bubble);
      });
  
      steps[problem].forEach(step => {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.textContent = step;
        stepsBox.appendChild(bubble);
      });
    }
  });
  