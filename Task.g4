grammar Task;

times
  : (time)+
  ;

time
  : absoluteTime
  ;

absoluteTime
  : hour TIME_SEPARATOR minute (am|pm)?
  | hour TIME_SEPARATOR minute
  | hour (am|pm)?
  | hour
  ;

hour
  : WHOLE_NUMBER
  ;

minute
  : WHOLE_NUMBER
  ;

am
  : 'a'
  | 'A'
  | 'am'
  | 'AM'
  ;

pm
  : 'p'
  | 'P'
  | 'pm'
  | 'PM'
  ;

TIME_SEPARATOR
  : ':'
  ;

WHOLE_NUMBER
  : [0-9]+
  ;

WHITESPACE
  : [ \t\r\n]+ -> skip
  ;
