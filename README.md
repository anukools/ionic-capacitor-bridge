# capacitor-bridge

Bridge to connect native to ionic app

## Install

```bash
npm install capacitor-bridge
npx cap sync
```

## API

<docgen-index>

* [`showFlutterView(...)`](#showflutterview)
* [`addListener('onFlutterMessage', ...)`](#addlisteneronfluttermessage-)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### showFlutterView(...)

```typescript
showFlutterView(options: { message: string; }) => Promise<void>
```

| Param         | Type                              |
| ------------- | --------------------------------- |
| **`options`** | <code>{ message: string; }</code> |

--------------------


### addListener('onFlutterMessage', ...)

```typescript
addListener(eventName: 'onFlutterMessage', listenerFunc: (data: { message: string; }) => void) => Promise<void>
```

| Param              | Type                                                 |
| ------------------ | ---------------------------------------------------- |
| **`eventName`**    | <code>'onFlutterMessage'</code>                      |
| **`listenerFunc`** | <code>(data: { message: string; }) =&gt; void</code> |

--------------------

</docgen-api>
