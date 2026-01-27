/* A. Tab-Switch Detection (The Visibility API)
You can track if the user leaves the tab to look up an answer.

Logic: Listen for the visibilitychange event on the document object.

Action: If document.hidden becomes true, you can pause the exam and show a warning, or automatically deduct 30 seconds from their timer as a penalty.

B. The "Refresh Shield" (Persistence)
As we discussed, using an Absolute Expiry Timestamp is the ultimate way to prevent users from refreshing the page to "reset" the clock.

Logic: Save the expiryTime (Start Time + 10 Minutes) to localStorage.

Action: Even if they close the browser, when they return, your code compares Date.now() to the saved expiryTime. If they were gone for 5 minutes, they lose 5 minutes.

C. Disabling Context Menus & Copy/Paste
Prevent users from right-clicking to search for text or using Ctrl+C.

Logic: Add event listeners for contextmenu, copy, and paste on the window object.

Action: Use e.preventDefault() to stop the action.


Fisher-Yates shuffle
*/