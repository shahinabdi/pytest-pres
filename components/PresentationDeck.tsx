import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Presentation } from 'lucide-react';

const PresentationDeck = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [viewMode, setViewMode] = useState('slides');

    const slides = [
        {
            title: "Calculator Testing Tutorial",
            subtitle: "Comprehensive Guide to Testing with Pytest",
            content: (
                <div className="space-y-6">
                    <div className="bg-blue-50 p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-4 text-gray-900">Program Overview: Calculator</h3>
                        <ul className="space-y-2 text-gray-800">
                            <li>• State tracking (last_result)</li>
                            <li>• Input validation</li>
                            <li>• Basic arithmetic operations</li>
                            <li>• Error handling</li>
                        </ul>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-4 text-gray-900">Test Categories</h3>
                        <ul className="space-y-2 text-gray-800">
                            <li>• Initialization Tests</li>
                            <li>• Basic Operation Tests</li>
                            <li>• State Management Tests</li>
                            <li>• Edge Cases</li>
                        </ul>
                    </div>
                </div>
            ),
            details: (
                <div className="space-y-4 text-gray-800">
                    <h3 className="font-bold text-lg text-gray-900">Calculator Class Structure:</h3>
                    <div className="bg-gray-50 p-4 rounded-lg shadow font-mono text-gray-800">
                        class Calculator:<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;def __init__(self) -`&gt;` None:<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.last_result = None<br />
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;def add(self, x: float, y: float) -`&gt;` float:<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;def subtract(self, x: float, y: float) -`&gt;` float:<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;def multiply(self, x: float, y: float) -`&gt;` float:<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;def devide(self, x: float, y: float) -`&gt;` float:<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;def get_last_result(self) -`&gt;` float:
                    </div>
                    <div className="mt-4">
                        <p className="font-bold text-gray-900">Key Features:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2 text-gray-800">
                            <li>Maintains calculation state</li>
                            <li>Validates all inputs</li>
                            <li>Handles arithmetic operations</li>
                            <li>Provides error handling</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            title: "Initialization Tests",
            subtitle: "Starting with Clean State",
            content: (
                <div className="space-y-6">
                    <div className="bg-green-50 p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-4 text-gray-900">TestCalculatorInitialization</h3>
                        <div className="bg-white p-4 rounded-lg font-mono text-gray-800">
                            def test_initial_state(self, calc):<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;assert calc.last_result is None<br />
                            <br />
                            def test_initial_get_last_result_raises_error(self, calc):<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;with pytest.raises(CalculatorError) as exc_info:<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;calc.get_last_result()
                        </div>
                    </div>
                </div>
            ),
            details: (
                <div className="space-y-4 text-gray-800">
                    <h3 className="font-bold text-lg text-gray-900">Purpose:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Ensures calculator starts with clean state</li>
                        <li>Verifies error handling before calculations</li>
                        <li>Uses fixtures for consistent setup</li>
                        <li>Tests both state and error conditions</li>
                    </ul>
                    <div className="bg-yellow-50 p-4 rounded-lg shadow mt-4">
                        <p className="font-bold text-gray-900">Key Testing Concepts:</p>
                        <ul className="list-disc pl-6 mt-2 text-gray-800">
                            <li>Fixture usage</li>
                            <li>Exception testing</li>
                            <li>State verification</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            title: "Basic Operations Tests",
            subtitle: "Testing Core Functionality",
            content: (
                <div className="space-y-6">
                    <div className="bg-indigo-50 p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-4 text-gray-900">Parameterized Tests</h3>
                        <div className="bg-white p-4 rounded-lg font-mono text-gray-800">
                            @pytest.mark.parametrize("x, y, expected", [<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;(1, 1, 2),&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Regular integers<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;(-1, 1, 0),&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Mixed signs<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;(0.1, 0.2, 0.3),&nbsp;&nbsp;# Decimals<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;(1000000, 1000000, 2000000)&nbsp;&nbsp;# Large numbers<br />
                            ])
                        </div>
                    </div>
                </div>
            ),
            details: (
                <div className="space-y-4 text-gray-800">
                    <h3 className="font-bold text-lg text-gray-900">Test Cases Cover:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Regular integers: Basic functionality</li>
                        <li>Mixed signs: Positive/negative combinations</li>
                        <li>Zero cases: Edge case handling</li>
                        <li>Decimals: Floating-point arithmetic</li>
                        <li>Large numbers: Number range handling</li>
                    </ul>
                    <div className="bg-blue-50 p-4 rounded-lg shadow mt-4">
                        <p className="font-bold text-gray-900">For Each Operation:</p>
                        <ul className="list-disc pl-6 mt-2 text-gray-800">
                            <li>Tests result correctness</li>
                            <li>Verifies state updates</li>
                            <li>Handles special cases</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            title: "Edge Cases",
            subtitle: "Handling Special Cases and Errors",
            content: (
                <div className="space-y-6">
                    <div className="bg-orange-50 p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-4 text-gray-900">Edge Case Tests</h3>
                        <div className="bg-white p-4 rounded-lg font-mono text-gray-800">
                            @pytest.mark.parametrize("operation, x, y, expected_error", [<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;("add", "not a number", 5, "Calculator operations require numeric inputs"),<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;("divide", 1, 0, "Cannot divide by zero"),<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;("multiply", None, 3, "Calculator operations require numeric inputs")<br />
                            ])
                        </div>
                    </div>
                </div>
            ),
            details: (
                <div className="space-y-4 text-gray-800">
                    <h3 className="font-bold text-lg text-gray-900">Edge Cases Covered:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Invalid input types</li>
                        <li>Division by zero</li>
                        <li>Special float values (inf, nan)</li>
                        <li>Type validation</li>
                        <li>Error message verification</li>
                    </ul>
                    <div className="bg-red-50 p-4 rounded-lg shadow mt-4">
                        <p className="font-bold text-gray-900">Error Handling:</p>
                        <ul className="list-disc pl-6 mt-2 text-gray-800">
                            <li>Validates input types</li>
                            <li>Catches calculation errors</li>
                            <li>Verifies error messages</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            title: "State Management",
            subtitle: "Testing Result Tracking",
            content: (
                <div className="space-y-6">
                    <div className="bg-teal-50 p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-4 text-gray-900">Last Result Tests</h3>
                        <div className="bg-white p-4 rounded-lg font-mono text-gray-800">
                            def test_last_result_persistence(self, calc):<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;calc.add(2, 2)&nbsp;&nbsp;&nbsp;&nbsp;# result = 4<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;assert calc.get_last_result() == 4<br />
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;calc.multiply(3, 3)&nbsp;&nbsp;# result = 9<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;assert calc.get_last_result() == 9
                        </div>
                    </div>
                </div>
            ),
            details: (
                <div className="space-y-4 text-gray-800">
                    <h3 className="font-bold text-lg text-gray-900">State Management Coverage:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Result persistence across operations</li>
                        <li>State updates after each operation</li>
                        <li>Operation sequence handling</li>
                        <li>Error state management</li>
                    </ul>
                    <div className="bg-emerald-50 p-4 rounded-lg shadow mt-4">
                        <p className="font-bold text-gray-900">Key Concepts:</p>
                        <ul className="list-disc pl-6 mt-2 text-gray-800">
                            <li>State tracking</li>
                            <li>Result persistence</li>
                            <li>Sequential operations</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            title: "Test Markers",
            subtitle: "Organizing and Running Different Test Categories",
            content: (
                <div className="space-y-6">
                    <div className="bg-violet-50 p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-4 text-gray-900">Available Markers</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-lg text-gray-800">
                                <p className="font-bold text-gray-900 mb-2">@pytest.mark.smoke</p>
                                <div className="font-mono text-sm whitespace-pre overflow-x-auto">
                                    {`@pytest.mark.smoke
      class TestCalculatorSmoke:
          """Basic smoke tests to verify core functionality"""
      
          def test_basic_addition(self, calc):
              """Verify basic addition works"""
              assert calc.add(2, 2) == 4
          
          def test_basic_subtraction(self, calc):
              """Verify basic subtraction works"""
              assert calc.subtract(5, 3) == 2
              
          def test_basic_multiply(self, calc):
              """Verify basic multiplication works"""
              assert calc.multiply(3, 3) == 9
          
          def test_basic_divide(self, calc):
              """Verify basic division works"""
              assert calc.devide(8, 2) == 4`}
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded-lg text-gray-800">
                                <p className="font-bold text-gray-900 mb-2">@pytest.mark.slow</p>
                                <div className="font-mono text-sm whitespace-pre overflow-x-auto">
                                    {`@pytest.mark.slow
      class TestCalculatorSlow:
          """Tests that might take longer to execute"""
          
          @pytest.mark.parametrize("n", [
              10000, 100000, 1000000
          ])
          def test_large_numbers_addition(
              self, calc, n
          ):
              """Test addition with large numbers"""
              result = calc.add(n, n)
              assert result == 2 * n
              
          @pytest.mark.parametrize("n", range(1000))
          def test_multiple_operations(
              self, calc, n
          ):
              """Test chain of operations"""
              calc.add(n, n)
              calc.multiply(2, n)
              calc.subtract(n, 50)
              calc.devide(n, 2)
              assert isinstance(
                  calc.get_last_result(), 
                  float
              )`}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-amber-50 p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-4 text-gray-900">Precision and Edge Cases</h3>
                        <div className="bg-white p-4 rounded-lg font-mono text-sm text-gray-800 whitespace-pre">
                            {`@pytest.mark.slow
      class TestCalculatorPrecision:
          """Tests that verify numerical precision"""
          
          @pytest.mark.parametrize("x, y", [
              (1/3, 1/6),
              (0.1111111111, 0.2222222222),
              (0.999999999, 0.000000001)
          ])
          def test_floating_point_precision(
              self, calc, x, y
          ):
              """Test precision with floating point calculations"""
              result = calc.add(x, y)
              assert abs(result - (x + y)) < 1e-10
      
      @pytest.mark.edge_cases
      class TestEdgeCases:
          """Tests for boundary conditions and special cases"""
          
          def test_float_infinity(self, calc):
              """Test operations with float infinity"""
              inf = float('inf')
              assert calc.add(inf, 1) == inf
              
          def test_float_nan(self, calc):
              """Test operations with NaN"""
              nan = float('nan')
              result = calc.add(nan, 1)
              assert math.isnan(result)`}
                        </div>
                    </div>

                    <div className="bg-emerald-50 p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-4 text-gray-900">Running Tests with Markers</h3>
                        <div className="bg-white p-4 rounded-lg font-mono text-sm text-gray-800 whitespace-pre">
                            {`# Development Workflow
      pytest -v -m "not slow"  # Quick development cycle
      pytest -v --cov=src --cov-report=term-missing  # Full suite
      
      # CI/CD Pipeline
      pytest -v -m smoke  # Stage 1: Smoke Tests
      pytest -v  # Stage 2: Full Suite
      pytest -v --cov=src --cov-report=html  # Stage 3: Coverage
      
      # Specific Test Categories
      pytest -v -m slow  # Run only slow tests
      pytest -v -m "smoke or edge_cases"  # Run smoke and edge cases
      pytest -v -m "not slow"  # Skip slow tests
      pytest -v tests/test_operations_markers.py -m smoke  # Specific file`}
                        </div>
                    </div>
                </div>
            ),
            details: (
                <div className="space-y-4 text-gray-800">
                    <h3 className="font-bold text-lg text-gray-900">Test Categories and Markers:</h3>
                    <div className="space-y-4">
                        <div className="bg-blue-50 p-4 rounded-lg shadow">
                            <p className="font-bold text-gray-900">Smoke Tests (@pytest.mark.smoke)</p>
                            <ul className="list-disc pl-6 mt-2">
                                <li>Quick sanity checks</li>
                                <li>Basic functionality verification</li>
                                <li>Core operations testing</li>
                                <li>Ideal for CI/CD pipelines</li>
                            </ul>
                        </div>

                        <div className="bg-orange-50 p-4 rounded-lg shadow">
                            <p className="font-bold text-gray-900">Slow Tests (@pytest.mark.slow)</p>
                            <ul className="list-disc pl-6 mt-2">
                                <li>Large number operations</li>
                                <li>Multiple operation chains</li>
                                <li>High-precision calculations</li>
                                <li>Time-consuming validations</li>
                            </ul>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg shadow">
                            <p className="font-bold text-gray-900">Edge Cases (@pytest.mark.edge_cases)</p>
                            <ul className="list-disc pl-6 mt-2">
                                <li>Type validation</li>
                                <li>Special numeric values (inf, nan)</li>
                                <li>Input validation tests</li>
                                <li>Error handling scenarios</li>
                                <li>Boundary condition testing</li>
                            </ul>
                        </div>

                        <div className="bg-purple-50 p-4 rounded-lg shadow">
                            <p className="font-bold text-gray-900">Configuration in conftest.py:</p>
                            <div className="font-mono text-sm bg-white p-3 rounded mt-2 whitespace-pre">
                                {`def pytest_configure(config):
          """Register custom markers."""
          config.addinivalue_line(
              "markers",
              "smoke: mark test as smoke test (quick sanity check)"
          )
          config.addinivalue_line(
              "markers",
              "slow: mark test as slow running"
          )
          config.addinivalue_line(
              "markers",
              "edge_cases: mark tests for boundary conditions"
          )`}
                            </div>
                        </div>

                        <div className="bg-yellow-50 p-4 rounded-lg shadow">
                            <p className="font-bold text-gray-900">Best Practices:</p>
                            <ul className="list-disc pl-6 mt-2">
                                <li>Register all markers in conftest.py</li>
                                <li>Use clear, descriptive marker names</li>
                                <li>Document marker purposes</li>
                                <li>Organize tests by functionality</li>
                                <li>Plan test execution strategy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
        ,
        {
            title: "Testing Strategy",
            subtitle: "Organizing and Running Test Suites",
            content: (
                <div className="space-y-6">
                    <div className="bg-blue-50 p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-4 text-gray-900">Test Execution Patterns</h3>
                        <div className="space-y-4">
                            <div className="bg-white p-4 rounded-lg text-gray-800">
                                <p className="font-bold mb-2">Development Workflow</p>
                                <pre className="text-sm">
                                    {`# Quick development cycle
      pytest -v -m "not slow"
      
      # Full test suite
      pytest -v --cov=src --cov-report=term-missing`}
                                </pre>
                            </div>
                            <div className="bg-white p-4 rounded-lg text-gray-800">
                                <p className="font-bold mb-2">CI/CD Pipeline</p>
                                <pre className="text-sm">
                                    {`# Stage 1: Smoke Tests
      pytest -v -m smoke
      
      # Stage 2: Full Suite
      pytest -v
      
      # Stage 3: Coverage Report
      pytest -v --cov=src --cov-report=html`}
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            details: (
                <div className="space-y-4 text-gray-800">
                    <h3 className="font-bold text-lg text-gray-900">Test Organization Best Practices:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Group related tests in classes</li>
                        <li>Use markers for test categorization</li>
                        <li>Create fixtures for common setups</li>
                        <li>Implement parametrized tests for thoroughness</li>
                        <li>Maintain test independence</li>
                    </ul>
                    <div className="bg-yellow-50 p-4 rounded-lg shadow mt-4">
                        <p className="font-bold text-gray-900">Running Tests Tips:</p>
                        <ul className="list-disc pl-6 mt-2">
                            <li>Use -v for verbose output</li>
                            <li>Use -s to see print statements</li>
                            <li>Use -k for keyword filtering</li>
                            <li>Use --pdb for debugging failures</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            title: "Mocking and Monkey Patching",
            subtitle: "Advanced Testing Techniques with Pytest",
            content: (
                <div className="space-y-6">
                    <div className="bg-indigo-50 p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-4 text-gray-900">Mocking Examples</h3>
                        <div className="bg-white p-4 rounded-lg">
                            <pre className="font-mono text-sm text-gray-800">
                                {`# weather.py
          import requests
          
          class WeatherService:
              def __init__(self, api_key):
                  self.api_key = api_key
                  self.base_url = "http://api.weatherapi.com/v1"
          
              def get_temperature(self, city):
                  """Get current temperature for a city"""
                  response = requests.get(
                      f"{self.base_url}/current.json",
                      params={
                          "key": self.api_key,
                          "q": city
                      }
                  )
                  data = response.json()
                  return data["current"]["temp_c"]`}
                            </pre>
                            <pre className="font-mono text-sm text-gray-800 mt-4">
                                {`# test_weather.py
          def test_get_temperature(mocker):
              # Mock the requests.get call
              mock_response = mocker.Mock()
              mock_response.json.return_value = {
                  "current": {"temp_c": 20.5}
              }
              mocker.patch(
                  "requests.get",
                  return_value=mock_response
              )
          
              # Test the service
              service = WeatherService("fake_key")
              temp = service.get_temperature("London")
              assert temp == 20.5`}
                            </pre>
                        </div>
                    </div>

                    <div className="bg-violet-50 p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-4 text-gray-900">Monkey Patching</h3>
                        <div className="bg-white p-4 rounded-lg">
                            <pre className="font-mono text-sm text-gray-800">
                                {`# config.py
          class Config:
              def __init__(self):
                  self.data = {}
          
              def get_database_url(self):
                  return self.data.get(
                      "DB_URL", 
                      "sqlite:///default.db"
                  )`}
                            </pre>
                            <pre className="font-mono text-sm text-gray-800 mt-4">
                                {`# test_config.py
          def test_database_url(monkeypatch):
              """Test config with monkey patched environment"""
              config = Config()
              
              # Patch the config data
              monkeypatch.setattr(
                  config,
                  "data",
                  {"DB_URL": "postgresql://test:test@localhost/test"}
              )
              
              assert config.get_database_url() == \\
                  "postgresql://test:test@localhost/test"`}
                            </pre>
                        </div>
                    </div>
                </div>
            ),
            details: (
                <div className="space-y-4 text-gray-800">
                    <h3 className="font-bold text-lg text-gray-900">Key Concepts:</h3>

                    <div className="bg-blue-50 p-4 rounded-lg shadow">
                        <p className="font-bold text-gray-900">Mocking (@pytest.mock)</p>
                        <ul className="list-disc pl-6 mt-2 text-gray-800">
                            <li>Replace real objects with test doubles</li>
                            <li>Simulate API responses</li>
                            <li>Control function return values</li>
                            <li>Verify function calls</li>
                        </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg shadow">
                        <p className="font-bold text-gray-900">Monkey Patching (monkeypatch)</p>
                        <ul className="list-disc pl-6 mt-2 text-gray-800">
                            <li>Modify objects/functions at runtime</li>
                            <li>Change environment variables</li>
                            <li>Override class attributes</li>
                            <li>Modify system paths</li>
                        </ul>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg shadow">
                        <p className="font-bold text-gray-900">When to Use:</p>
                        <ul className="list-disc pl-6 mt-2 text-gray-800">
                            <li>Testing external API calls</li>
                            <li>Isolating system dependencies</li>
                            <li>Testing different configurations</li>
                            <li>Simulating complex scenarios</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            title: "Let's Practice!",
            subtitle: "Get Started with Real Testing",
            content: (
                <div className="space-y-6">
                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-4 text-gray-900">Practice Projects</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <div className="flex items-center mb-4">
                                    <div className="w-6 h-6 mr-2" />
                                    <h4 className="text-lg font-semibold">GitHub Repository</h4>
                                </div>
                                <p className="text-gray-700 mb-4">Access the Task Manager project on GitHub:</p>
                                <a
                                    href="https://github.com/example/task-manager-testing"
                                    className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm transition-colors"
                                >
                                    Clone from GitHub
                                </a>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <div className="flex items-center mb-4">
                                    <div className="w-6 h-6 mr-2" />
                                    <h4 className="text-lg font-semibold">GitLab Repository</h4>
                                </div>
                                <p className="text-gray-700 mb-4">Access the Task Manager project on GitLab:</p>
                                <a
                                    href="https://gitlab.com/example/task-manager-testing"
                                    className="inline-flex items-center px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-lg text-sm transition-colors"
                                >
                                    Clone from GitLab
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-4 text-gray-900">Getting Started</h3>
                        <div className="bg-white p-4 rounded-lg font-mono text-sm text-gray-800">
                            <div className="space-y-2">
                                <p># 1. Clone the repository</p>
                                <p className="text-green-600">git clone [repository-url]</p>
                                <p># 2. Create and activate virtual environment</p>
                                <p className="text-green-600">python -m venv venv</p>
                                <p className="text-green-600">source venv/bin/activate  # On Unix/MacOS</p>
                                <p className="text-green-600">venv\Scripts\activate  # On Windows</p>
                                <p># 3. Install dependencies</p>
                                <p className="text-green-600">pip install -r requirements.txt</p>
                                <p># 4. Run the tests</p>
                                <p className="text-green-600">pytest -v</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-yellow-50 p-6 rounded-lg shadow">
                        <h3 className="text-xl font-bold mb-4 text-gray-900">Practice Tasks</h3>
                        <ol className="list-decimal pl-6 space-y-2 text-gray-800">
                            <li>Run the existing test suite and review the coverage report</li>
                            <li>Add new test cases for edge cases in the Task Manager</li>
                            <li>Implement mocking for the database operations</li>
                            <li>Create parametrized tests for task validation</li>
                            <li>Add custom markers for different test categories</li>
                        </ol>
                    </div>
                </div>
            ),
            details: (
                <div className="space-y-4 text-gray-800">
                    <h3 className="font-bold text-lg text-gray-900">Project Structure:</h3>
                    <div className="bg-gray-50 p-4 rounded-lg shadow font-mono text-sm">
                        task_manager/
                        <br />├── src/
                        <br />│   ├── __init__.py
                        <br />│   ├── models.py
                        <br />│   ├── service.py
                        <br />│   └── utils.py
                        <br />├── tests/
                        <br />│   ├── __init__.py
                        <br />│   ├── conftest.py
                        <br />│   ├── test_models.py
                        <br />│   └── test_service.py
                        <br />├── requirements.txt
                        <br />└── README.md
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg shadow mt-4">
                        <p className="font-bold text-gray-900">Key Files:</p>
                        <ul className="list-disc pl-6 mt-2 text-gray-800">
                            <li>models.py: Task and User model definitions</li>
                            <li>service.py: Business logic and operations</li>
                            <li>utils.py: Helper functions and utilities</li>
                            <li>conftest.py: Pytest fixtures and configuration</li>
                            <li>test_*.py: Test modules for different components</li>
                        </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg shadow mt-4">
                        <p className="font-bold text-gray-900">Learning Goals:</p>
                        <ul className="list-disc pl-6 mt-2 text-gray-800">
                            <li>Writing effective test cases</li>
                            <li>Using pytest fixtures and markers</li>
                            <li>Implementing mocking strategies</li>
                            <li>Achieving good test coverage</li>
                            <li>Following testing best practices</li>
                        </ul>
                    </div>
                </div>
            )
        }
    ];

    const nextSlide = () => {
        setCurrentSlide(curr => (curr + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide(curr => (curr - 1 + slides.length) % slides.length);
    };

    const toggleViewMode = () => {
        setViewMode(current => current === 'slides' ? 'details' : 'slides');
    };

    return (
        <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-900">{slides[currentSlide].title}</h1>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleViewMode}
                            className="flex items-center px-4 py-2 bg-purple-100 rounded-lg hover:bg-purple-200 text-gray-800"
                        >
                            {viewMode === 'slides' ? (
                                <><BookOpen className="w-5 h-5 mr-2" />Details</>
                            ) : (
                                <><Presentation className="w-5 h-5 mr-2" />Slides</>
                            )}
                        </button>
                        <div className="text-sm text-gray-600">
                            {currentSlide + 1} / {slides.length}
                        </div>
                    </div>
                </div>

                <h2 className="text-xl text-gray-700 mb-8">{slides[currentSlide].subtitle}</h2>

                <div className="min-h-[400px]">
                    {viewMode === 'slides' ? slides[currentSlide].content : slides[currentSlide].details}
                </div>

                <div className="flex justify-between mt-8">
                    <button
                        onClick={prevSlide}
                        className="flex items-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 text-gray-800"
                    >
                        <ChevronLeft className="w-5 h-5 mr-2" />
                        Previous
                    </button>
                    <button
                        onClick={nextSlide}
                        className="flex items-center px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 text-white"
                    >
                        Next
                        <ChevronRight className="w-5 h-5 ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PresentationDeck;