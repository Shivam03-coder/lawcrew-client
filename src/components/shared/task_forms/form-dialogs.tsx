"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { RootState, useAppDispatch, useAppSelector } from "@/store";
import { closeform } from "@/store/states/form";
import formComponents from ".";
import { useIsMobile } from "@/hooks/use-mobile";

export function FormModal() {
  const { forms } = useAppSelector((state: RootState) => state.forms);
  const dispatch = useAppDispatch();
  const isMobile = useIsMobile();

  const handleClose = (formKey: string) => {
    dispatch(closeform(formKey));
  };

  return (
    <>
      {Object.entries(forms).map(([key, isOpen]) => {
        if (!isOpen) return null;

        const FormComponent = formComponents[key];

        return isMobile ? (
          // **Sheet (for Mobile)**
          <Sheet open={isOpen} onOpenChange={() => handleClose(key)} key={key}>
            <SheetContent
              side="bottom"
              className="mx-auto w-full max-w-md rounded-t-lg bg-white shadow-lg"
            >
              <SheetHeader className="sticky top-0 border-b p-4">
                <SheetTitle className="text-center uppercase">
                  {key.replace("form", "")} Form
                </SheetTitle>
              </SheetHeader>
              <div className="max-h-[70vh] overflow-auto p-4">
                {FormComponent ? <FormComponent /> : <div>No Form Found</div>}
              </div>
              <div className="p-4">
                <SheetClose asChild>
                  <Button
                    className="w-full bg-primary uppercase text-secondary"
                    onClick={() => handleClose(key)}
                  >
                    Close
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <Dialog open={isOpen} onOpenChange={() => handleClose(key)} key={key}>
            <DialogContent className="w-[96%] bg-white border-2 border-blue-400 md:min-w-[43%]">
              <DialogHeader className="sticky left-0 top-0">
                <DialogTitle className="text-center uppercase">
                  {key.replace("form", "")} Form
                </DialogTitle>
              </DialogHeader>
              <div className="max-h-[70vh] overflow-auto">
                {FormComponent ? <FormComponent /> : <div>No Form Found</div>}
              </div>
              <DialogFooter>
                <Button
                  className="mx-auto w-[70%] bg-primary uppercase text-secondary"
                  onClick={() => handleClose(key)}
                >
                  Close
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        );
      })}
    </>
  );
}

export default FormModal;
