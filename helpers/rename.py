import os

def rename_files_in_directory(directory):
    for filename in os.listdir(directory):
        old_path = os.path.join(directory, filename)
        if os.path.isfile(old_path):
            new_filename = filename.replace(" ", "_")
            new_path = os.path.join(directory, new_filename)
            os.rename(old_path, new_path)

if __name__ == "__main__":
    directory = r"C:\Users\mraya\OneDrive - Osloskolen\vg1_\it\andre semester\spill - Copy\images\spell"
    rename_files_in_directory(directory)