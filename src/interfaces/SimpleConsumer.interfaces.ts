export interface SimpleConsumer {
    connect(): any;
    // connect(): Promise<void>;
    handle(message: any): Promise<void>
    disconnect(): Promise<void>;
  }