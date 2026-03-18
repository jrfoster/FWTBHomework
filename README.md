<h1>Read Me </h1>

<h3>Python</h3>

<h5>What I did</h5><br>

1) I first wanted to make sure I could successfully load the CSV file and view its contents, so I wrote code to read the file and removed the header row.<br>

2) To handle date sorting, I iterated through the CSV file row by row. As I processed each entry, I added the prices to a running total and used a counter to keep track of how many transactions occurred for each day. <br>

3) Since the amounts in the file were strings, I needed to convert them to floats in order to perform calculations. To do this, I created a function that takes two values and checks whether they are floats or strings, and converts them to floats when possible.<br>

4) After calculating the totals, I stored the date and total transaction amount in a list. I then divided the total by the transaction counter to calculate the average amount spent for that day. This information was stored in the format [day, total, avg], and each day’s data was added to a larger list that grouped all daily summaries together.<br>

5) For category sorting, I took a slightly different approach. I first collected all category values from the CSV file and placed them into their own list.<br>

6) I then created two additional lists: one containing the category names and another containing the corresponding transaction lists. These were passed into two functions for processing.<br>

7) The first function accepts a category name and its associated list of transactions, then sends that data to a second function. The second function calculates the total and average values and returns them to the first function. The first function then formats the results into a list [name, total, avg], which is returned and stored in another list that groups all category summaries together.<br>

8) Next, I handled incorrectly formatted rows in the CSV file. I created a list to store problematic rows and a line counter to track the row number being processed.<br>

9) I implemented checks for missing values in each column and for rows containing more than four fields. If a problem was detected, the program passed the line number and a message describing the issue to a function that recorded the error.<br>

10) After collecting all errors, I wrote the contents of the bad line list to a file named errors.log, which stores all incorrectly formatted rows.<br>

11) To support this, I created a function that converts the elements in the error list into strings so they can be properly written to the log file.<br>

12) I also noticed that running the program multiple times would overwrite the existing errors.log file. To prevent issues with leftover data, I added logic to delete the old file if it already existed before creating a new one. <br>

13) Finally, I generated a JSON file for the processed date and category data. I created two additional lists containing the labels for the information in the date and category summaries, then used zip to combine the labels with their corresponding values before writing them to the JSON file.<br>

<h5>Why I did this</h5>
For me, a list done correctly can keep things organized and can be seen and read easily.

<h5>Things I would like to possibly change</h5>
Have the sorting work both ways, so I don't have two ways of doing it.


<h3>JavaScript</h3>

<h5>What I did</h5><br>

1. I implemented a method to read the JSON file and convert it into a dictionary, using each `id` as the key and storing the corresponding `parentId` and `text` in an array as the value.<br>

2. I then created a function to find the head (root) of each tree. This function checks the `parentId` and recursively calls itself to trace back to the root, avoiding the need to iterate through the entire dataset each time.<br>

3. After that, I stored all of the identified head nodes in an array so their associated messages could be displayed.<br>

 At this point, I was unsure if this step was necessary. Based on my understanding of the first task, it seemed relevant, but as I progressed through the rest of the assignment, it did not appear to fit with the overall requirements. Because of this, I temporarily commented it out.<br>

4. I then built an initial `buildTree` function using loops to construct the tree structure and output it as JSON.<br>

5. After rereading the instructions, I realized my initial approach needed adjustment, so I revisited and reworked the `buildTree` function.<br>

6. The revised `buildTree` function uses a helper function and recursion to construct the tree. It builds a new dictionary-like structure and recursively identifies and attaches child nodes, resulting in a correctly structured tree that is then output as JSON.<br>
