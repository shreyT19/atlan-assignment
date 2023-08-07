# Online SQL Compiler

This online platform offers a SQL editor for executing queries. The tool features a text area where you can input the desired query and then initiate its execution by clicking the <button>Run SQL</button> button. Additionally, you have the option to import queries from your local storage and view them in a tablulated format.

<img width="1440" alt="Screenshot 2023-08-07 at 9 37 38 AM" src="https://github.com/shreyT19/atlan-assignment/assets/116892456/9b074ec2-f218-4ac3-ab20-48d0dde4a9d1">


The application is already equipped with a set of preloaded mock data. These mock data entries are presented alongside their corresponding tables, conveniently located on the right side of the interface. As you explore further, you'll notice that these tables have been populated according to an Entity-Relationship Schema. This schema is thoughtfully depicted on the left side of the interface, providing a comprehensive visual representation of the relationships and structures within the dataset.

# Entity-Relationship Schema

<img width="236" alt="Screenshot 2023-08-07 at 9 42 28 AM" src="https://github.com/shreyT19/atlan-assignment/assets/116892456/94066f94-7361-4866-a5a7-e40eab06bd72">

Imported Data table has been populated using data imported from a custom CSV file.

# Query Export

<img width="1195" alt="Screenshot 2023-08-07 at 9 50 59 AM" src="https://github.com/shreyT19/atlan-assignment/assets/116892456/6bd2bcf1-92e0-4f8d-aba0-43e609e3fa3d">


<li> Furthermore, the application incorporates an "Export" button that becomes available after executing a query. This button facilitates the download of the precise data displayed in the output table, formatted in CSV for easy accessibility.</li>

# Queries Dropdown 

Upon selecting and executing any of these queries, the application seamlessly generates and presents sample data outputs from the JSON file.

# Semicolon Warning and Query Error Handling

<img width="398" alt="Screenshot 2023-08-07 at 10 05 27 AM" src="https://github.com/shreyT19/atlan-assignment/assets/116892456/ad3cd19b-4ddc-47a6-ae63-e8ce36042d98">

# Technology Used

React: The application is built using the React JavaScript library, allowing for efficient and modular user interface development.

CSV Reader and Link: The application leverages the capabilities of a CSV reader, which facilitates the seamless import, export and interpretation of CSV data. 

Sure, here's a concise and formatted version of the optimizations that you can include in your GitHub README:

## Performance Optimizations

To ensure optimal performance and reduced load times, it has been strategically optimized using various techniques:

- **React.memo()**: Components have been memoized using `React.memo()` to prevent unnecessary re-renders when props remain unchanged, resulting in more efficient rendering.

- **Context API**: The Context API has been leveraged to eliminate prop drilling and manage global state seamlessly, enhancing data access without excessive prop passing.

- **useMemo()**: The `useMemo()` hook has been strategically applied to cache computationally intensive data or function results, leading to memory-efficient operations and improved overall performance.

- **Lazy Loading**: Components have been set up for lazy loading, ensuring that they load only when required. This significantly reduces the initial bundle size and enhances perceived loading speed.

## Measuring Page Load Time

 **Web Vitals Extension Data**: I harness the insights provided by the Web Vitals extension, which furnishes valuable metrics such as First Contentful Paint (FCP), Largest Contentful Paint (LCP), and Cumulative Layout Shift (CLS). 
 

 **Lighthouse Reports**: A powerful tool that assesses web page performance, best practices, and SEO.

<img width="556" alt="Screenshot 2023-08-07 at 9 32 04 AM" src="https://github.com/shreyT19/atlan-assignment/assets/116892456/0ec4b298-6d2c-434d-b3bb-68d4454ef3ea">

<img width="1431" alt="Screenshot 2023-08-07 at 9 30 59 AM" src="https://github.com/shreyT19/atlan-assignment/assets/116892456/ad208dce-03b4-4909-be8d-b6dc2c79b953">
