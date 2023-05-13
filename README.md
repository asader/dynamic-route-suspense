# Bug in suspense in dynamic routes

To see bug, open folder broken and run project. 

### Correct work of suspense:
Try to click on 'Link to article 1' or 'Link to article 2' from home page. For 1 second you will see "Data loading..." message returned from suspense.

### Incorrect work of suspense
Try to click on 'Link to article 2' from 'Link to article 1'. After click, for 1 second interface will remain the same, no messages from suspense

## Fix:
Force rerender when navigating to dynamic route page
