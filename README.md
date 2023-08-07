# SQL Editor - Frontend Engineering Assignment

This web-based application is designed to help you execute SQL queries, view query results, and explore data relationships easily. Below is an overview of the key features and technologies used in the application.

<img width="1440" alt="Screenshot 2023-08-07 at 9 37 38 AM" src="https://github.com/shreyT19/atlan-assignment/assets/116892456/9b074ec2-f218-4ac3-ab20-48d0dde4a9d1">

## Features

### SQL Query Execution

The application provides a text area where you can input your desired SQL query. After entering the query, simply click the "Run SQL" button to initiate its execution. The query results will be displayed below the query input area in a tabulated format.

### Data Import and Export

You can import queries from your local storage to streamline your workflow. Once you've executed a query and obtained the results, an "Export" button becomes available. This feature enables you to download the query results in CSV format for easy accessibility and analysis.

### Entity-Relationship Schema

To provide a comprehensive understanding of the data's structure, the application includes an Entity-Relationship Schema on the left side of the interface. This schema visually represents relationships and structures within the dataset, helping you navigate the data more effectively.

### Sample Data Outputs

The application incorporates a dropdown menu that lists sample queries. Upon selecting and executing any of these queries, the application generates and presents sample data outputs from the associated JSON file. This feature allows you to explore various query scenarios and their corresponding outputs.

### Semicolon Warning and Error Handling

The application offers user-friendly error handling by providing a semicolon warning when a query is missing a semicolon at the end. Additionally, if a query encounters an error during execution, appropriate error messages are displayed to assist with troubleshooting.

<img width="398" alt="Screenshot 2023-08-07 at 10 05 27 AM" src="https://github.com/shreyT19/atlan-assignment/assets/116892456/ad3cd19b-4ddc-47a6-ae63-e8ce36042d98">

## Technology Stack

### React

### React-CSV library

## Performance Optimizations

To ensure optimal performance and reduced load times, the application has been strategically optimized using various techniques:

- **React.memo()**: Components have been memoized using `React.memo()` to prevent unnecessary re-renders when props remain unchanged, leading to more efficient rendering.
- **Context API**: The Context API has been employed to manage global state seamlessly, eliminating prop drilling and enhancing data access.
- **useMemo()**: The `useMemo()` hook has been strategically applied to cache computationally intensive data or function results, promoting memory-efficient operations and improved overall performance.
- **Lazy Loading**: Components have been designed for lazy loading, ensuring they load only when necessary. This approach significantly reduces the initial bundle size and enhances perceived loading speed.

## Measuring Performance

### Web Vitals Extension Data

The application utilizes the insights provided by the Web Vitals extension, offering valuable metrics such as First Contentful Paint (FCP), Largest Contentful Paint (LCP), and Cumulative Layout Shift (CLS). These metrics help assess and improve page performance.

<img width="556" alt="Screenshot 2023-08-07 at 9 32 04 AM" src="https://github.com/shreyT19/atlan-assignment/assets/116892456/0ec4b298-6d2c-434d-b3bb-68d4454ef3ea">

### Lighthouse Reports

The application undergoes evaluation through Lighthouse reports, a powerful tool that assesses web page performance, best practices, and SEO. These reports provide valuable insights into the application's performance characteristics and opportunities for improvement.
<img width="1431" alt="Screenshot 2023-08-07 at 9 30 59 AM" src="https://github.com/shreyT19/atlan-assignment/assets/116892456/ad208dce-03b4-4909-be8d-b6dc2c79b953">
