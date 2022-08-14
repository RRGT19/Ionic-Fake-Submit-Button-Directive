## Example

```html
<ion-content>

    <form [formGroup]="form" 
          (ngSubmit)="onSubmit()" 
          fakeSubmitEnter>

      <!-- 
          Inputs........ 
          The last with an enterKeyHint GO for a good UX.
      -->

      <ion-button type="submit">
        Go
      </ion-button>

    </form>

</ion-content>
```
