import {
  Dropzone,
  DropzoneProps,
  FileWithPath,
  IMAGE_MIME_TYPE,
} from "@mantine/dropzone";
import { Group, Text, rem } from "@mantine/core";
import { ScalerContext, ScalerContextType } from "../../context/ScalerContext";
import { useContext } from "react";

export const FileLoader = () => {
  const { schemaErrorText } = useContext(ScalerContext) as ScalerContextType;
  return (
    <section>
      <h3>Load a Recipe</h3>
      <Dropzone
        onDrop={function (files: FileWithPath[]): void {
          throw new Error("Function not implemented.");
        }}
      >
        <Group
          justify="center"
          gap="xl"
          mih={220}
          style={{ pointerEvents: "none" }}
        >
          <Dropzone.Accept>
            <p>ACCEPT</p>
          </Dropzone.Accept>
          <Dropzone.Reject>
            <p>REJECT</p>
          </Dropzone.Reject>

          <div>
            <Text size="xl" inline>
              Drag a recipe file here, or click to select a file.
            </Text>
          </div>
        </Group>
      </Dropzone>
      {schemaErrorText && <p>{schemaErrorText}</p>}
    </section>
  );
};
