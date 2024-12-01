import React from 'react';
import { SlideProps } from './types';

export const Slide3 = (): SlideProps => ({
    title: "Basic Operations Tests",
    subtitle: "Testing Core Functionality",
    content: (
        <div className="space-y-6">
            <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg shadow dark:shadow-indigo-900/20">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    Parameterized Tests
                </h3>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg font-mono text-gray-800 dark:text-gray-300">
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
        <div className="space-y-4 text-gray-800 dark:text-gray-300">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                Test Cases Cover:
            </h3>
            <ul className="list-disc pl-6 space-y-2">
                <li>Regular integers: Basic functionality</li>
                <li>Mixed signs: Positive/negative combinations</li>
                <li>Zero cases: Edge case handling</li>
                <li>Decimals: Floating-point arithmetic</li>
                <li>Large numbers: Number range handling</li>
            </ul>
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg shadow dark:shadow-blue-900/20 mt-4">
                <p className="font-bold text-gray-900 dark:text-white">For Each Operation:</p>
                <ul className="list-disc pl-6 mt-2 text-gray-800 dark:text-gray-300">
                    <li>Tests result correctness</li>
                    <li>Verifies state updates</li>
                    <li>Handles special cases</li>
                </ul>
            </div>
        </div>
    )
});