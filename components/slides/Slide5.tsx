import React from 'react';
import { SlideProps } from './types';

export const Slide5 = (): SlideProps => ({
    title: "State Management",
    subtitle: "Testing Result Tracking",
    content: (
        <div className="space-y-6">
            <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg shadow dark:shadow-teal-900/20">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    Last Result Tests
                </h3>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg font-mono text-gray-800 dark:text-gray-300">
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
        <div className="space-y-4 text-gray-800 dark:text-gray-300">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                State Management Coverage:
            </h3>
            <ul className="list-disc pl-6 space-y-2">
                <li>Result persistence across operations</li>
                <li>State updates after each operation</li>
                <li>Operation sequence handling</li>
                <li>Error state management</li>
            </ul>
            <div className="bg-emerald-50 dark:bg-emerald-900/30 p-4 rounded-lg shadow dark:shadow-emerald-900/20 mt-4">
                <p className="font-bold text-gray-900 dark:text-white">Key Concepts:</p>
                <ul className="list-disc pl-6 mt-2 text-gray-800 dark:text-gray-300">
                    <li>State tracking</li>
                    <li>Result persistence</li>
                    <li>Sequential operations</li>
                </ul>
            </div>
        </div>
    )
});