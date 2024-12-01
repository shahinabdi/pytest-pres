import React from 'react';
import { SlideProps } from './types';

export const Slidefront = (): SlideProps => ({
    title: "DevTeam @ IAS",
    subtitle: "",
    content: (
        <div className="min-h-[400px] flex flex-col items-center justify-center space-y-8">
            <div className="text-center space-y-6">
                <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
                    Pytest Testing Tutorial
                </h1>
                <h2 className="text-3xl text-gray-700 dark:text-gray-300">
                    A Comprehensive Guide to Testing Python Applications
                </h2>
            </div>

            <div className="mt-16 text-center space-y-4">
                <p className="text-xl text-gray-800 dark:text-gray-300">Presented by</p>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Shahin ABDI</h3>
                <p className="text-lg text-gray-600 dark:text-gray-400">Software Developper @ IAS</p>
                <p className="text-lg text-gray-600 dark:text-gray-400">12/12/24</p>
            </div>

            <div className="mt-12 flex items-center gap-4">
                <a href="https://github.com/shahinabdi" target='_blank'
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 
                             dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                </a>
                <a href="https://linkedin.com/in/shahinabdi" target='_blank'
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 
                             dark:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    LinkedIn
                </a>
            </div>
        </div>
    ),
    details: (
        <div className="space-y-4">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white">About This Tutorial:</h3>
            <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg shadow">
                <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-300">
                    <li>Comprehensive guide to Python testing with pytest</li>
                    <li>Hands-on examples with real-world scenarios</li>
                    <li>Best practices and testing strategies</li>
                    <li>Interactive examples and exercises</li>
                </ul>
            </div>

            <div className="bg-green-50 dark:bg-gray-700 p-4 rounded-lg shadow mt-4">
                <p className="font-bold text-gray-900 dark:text-white">Prerequisites:</p>
                <ul className="list-disc pl-6 mt-2 text-gray-800 dark:text-gray-300">
                    <li>Basic Python programming knowledge</li>
                    <li>Familiarity with command line interface</li>
                    <li>Python 3.9+ installed</li>
                    <li>Text editor or IDE of your choice</li>
                </ul>
            </div>
        </div>
    )
});