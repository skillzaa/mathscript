
> This is an experimental library for displaying mathematical equations on canvas.

### How this works.
- The basic tenant of this lib is an object called **Lateral Machine** (or LatMachine). 
- This Lateral Machine has an array of segments.
- The segments implements an interface *ISegment*, in which it has a draw function (with some parameters).Each draw function takes in an x and after draw return a number which should be the starting x for the next  segment.

```typescript
export default interface ISegment{
    draw(state:State,local_x:number):number; 
}
```
- The Lateral Machine its self also has a *draw* function *more on this later*.
- The only purpose of the Lateral Machine is that once its draw function is called it will call the draw functions of all the segments in its segments array. while doing so every next segment will be given an X in which the width of the prev segment is added, hence the *Lateral movement Machine*.
- The Lateral Machine can also take in any new type of segment since we are *composing based on behaviour and not data*. All it cares that the segment should adhere to the interface ISegment. That means that as long as the new segment created has a draw function which returns a valid number it can be used by lat machine.

```typescript
add_segment(segment:ISegment){
this.segments.push(segment);
return segment;
}
```
- So we can safely say that the basic mechanism for our library is *open for extention but closed for change*.

- Now lets look at the fact that though Lat Machine accepts segments that implements ISegment interface BUT Lat Machine its self also implements ISegment interface **thus is chainable**.

> The Lat Machine accepts segments that implements ISegment but itsself also implements ISegment thus is chainable. Using this we can create tree structures of Lat Machines.