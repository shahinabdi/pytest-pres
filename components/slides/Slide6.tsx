import React from 'react';
import { SlideProps } from './types';

export const Slide6 = (): SlideProps => ({
    title: "Test Markers",
    subtitle: "Organizing and Running Different Test Categories",
    content: (
        <div className="space-y-6">
            <div className="bg-violet-50 dark:bg-violet-900/30 p-6 rounded-lg shadow dark:shadow-violet-900/20">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Available Markers</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-gray-800 dark:text-gray-300">
                        <p className="font-bold text-gray-900 dark:text-white mb-2">@pytest.mark.smoke</p>
                        <div className="font-mono text-sm whitespace-pre overflow-x-auto dark:text-gray-300">
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
        assert calc.divide(8, 2) == 4`}
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-gray-800 dark:text-gray-300">
                        <p className="font-bold text-gray-900 dark:text-white mb-2">@pytest.mark.slow</p>
                        <div className="font-mono text-sm whitespace-pre overflow-x-auto dark:text-gray-300">
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
        calc.divide(n, 2)
        assert isinstance(
            calc.get_last_result(), 
            float
        )`}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/30 p-6 rounded-lg shadow dark:shadow-amber-900/20">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Precision and Edge Cases</h3>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg font-mono text-sm text-gray-800 dark:text-gray-300 whitespace-pre">
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
        </div>
    ),
    details: (
        <div className="space-y-4 text-gray-800 dark:text-gray-300">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white">Test Categories and Markers:</h3>
            <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg shadow dark:shadow-blue-900/20">
                    <p className="font-bold text-gray-900 dark:text-white">Smoke Tests (@pytest.mark.smoke)</p>
                    <ul className="list-disc pl-6 mt-2 dark:text-gray-300">
                        <li>Quick sanity checks</li>
                        <li>Basic functionality verification</li>
                        <li>Core operations testing</li>
                        <li>Ideal for CI/CD pipelines</li>
                    </ul>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg shadow dark:shadow-orange-900/20">
                    <p className="font-bold text-gray-900 dark:text-white">Slow Tests (@pytest.mark.slow)</p>
                    <ul className="list-disc pl-6 mt-2 dark:text-gray-300">
                        <li>Large number operations</li>
                        <li>Multiple operation chains</li>
                        <li>High-precision calculations</li>
                        <li>Time-consuming validations</li>
                    </ul>
                </div>

                <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg shadow dark:shadow-green-900/20">
                    <p className="font-bold text-gray-900 dark:text-white">Edge Cases (@pytest.mark.edge_cases)</p>
                    <ul className="list-disc pl-6 mt-2 dark:text-gray-300">
                        <li>Type validation</li>
                        <li>Special numeric values (inf, nan)</li>
                        <li>Input validation tests</li>
                        <li>Error handling scenarios</li>
                        <li>Boundary condition testing</li>
                    </ul>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg shadow dark:shadow-purple-900/20">
                    <p className="font-bold text-gray-900 dark:text-white">Configuration in conftest.py:</p>
                    <div className="font-mono text-sm bg-white dark:bg-gray-800 p-3 rounded mt-2 whitespace-pre dark:text-gray-300">
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
            </div>
        </div>
    )
});