import datetime
import numpy as np

import matplotlib.pyplot as plt
import matplotlib as mpl

def save():
    mpl.rcParams["date.converter"] = "concise"
    
    limit_value = 365
    fig, (ax1, ax2, ax3) = plt.subplots(3, 1, layout="constrained")

    x_range = np.array(range(1, limit_value))
    y_range = np.array(range(1, limit_value))

    start_date = datetime.datetime(2023, 10, 18)

    x_dates = np.array([start_date + datetime.timedelta(days=n) for n in range(1, limit_value)])
    y_dates = np.array([start_date + datetime.timedelta(days=n) for n in range(1, limit_value)])

    ax1.semilogx(x_dates, y_dates)
    ax2.semilogx(x_dates, y_range)
    ax3.semilogx(x_range, y_dates)

    plt.show()

def test_stem():
    mpl.rcParams["date.converter"] = "concise"
    fig, (ax1, ax2, ax3, ax4, ax5, ax6) = plt.subplots(6, 1, layout="constrained")

    limit_value = 10
    above = datetime.datetime(2023, 9, 18)
    below = datetime.datetime(2023, 11, 18)

    x_ranges = np.array(range(1, limit_value))
    y_ranges = np.array(range(1, limit_value))

    x_dates = np.array(
        [datetime.datetime(2023, 10, n) for n in range(1, limit_value)]
    )
    y_dates = np.array(
        [datetime.datetime(2023, 10, n) for n in range(1, limit_value)]
    )

    ax1.stem(x_dates, y_dates, bottom = above)
    ax2.stem(x_dates, y_ranges, bottom = 5)
    ax3.stem(x_ranges, y_dates, bottom = below)

    ax4.stem(x_ranges, y_dates, orientation="horizontal", bottom=above) 
    ax5.stem(x_dates, y_ranges, orientation="horizontal", bottom=5)
    ax6.stem(x_ranges, y_dates, orientation="horizontal", bottom=below)

    plt.show()

def test_text():
    mpl.rcParams["date.converter"] = 'concise'
    fig, (ax1, ax2, ax3) = plt.subplots(3, 1, layout="constrained")
    limit_value = 10
    font_properties = {'family': 'serif', 'size': 12, 'weight': 'bold'}

    test_date = datetime.datetime(2023, 10, 1)

    x_data = np.array(range(1, limit_value))
    y_data = np.array(range(1, limit_value))

    x_dates = np.array(
        [datetime.datetime(2023, 10, n) for n in range(1, limit_value)]
    )
    y_dates = np.array(
        [datetime.datetime(2023, 10, n) for n in range(1, limit_value)]
    )

    ax1.plot(x_dates, y_data)
    ax1.text(test_date, 5, "Inserted Text", **font_properties)

    ax2.plot(x_data, y_dates)
    ax2.text(7, test_date, "Inserted Text", **font_properties)

    ax3.plot(x_dates, y_dates)
    ax3.text(test_date, test_date, "Inserted Text", **font_properties)

    plt.show()

def test():
    fig, ax = plt.subplots()
    x = [1, 2, 3, 4, 5]
    y = [2, 4, 1, 3, 6]
    ax.plot(x, y, label='Data')

    # Add text to the plot using ax.text
    text_x = 3  # X-coordinate
    text_y = 5  # Y-coordinate
    text = "This is the peak"  # Text content

    # Specify font properties as individual keyword arguments
    font_properties = {
        'family': 'serif',
        'size': 12,
        'style': 'italic',
        'weight': 'bold',
        'color': 'blue'
    }

    # Add the text to the plot
    ax.text(text_x, text_y, text, **font_properties)

    # Add labels and legend
    ax.set_xlabel('X-axis')
    ax.set_ylabel('Y-axis')
    ax.set_title('Example Plot')
    ax.legend()

    plt.show()

def test_fill():
    mpl.rcParams["date.converter"] = "concise"
    fig, ax = plt.subplots()
    range_threshold = 30

    x_dates = np.array(
        [datetime.datetime(2023, 10, delta) for delta in range(1, range_threshold)]
    )
    y_dates = np.array(
        [datetime.datetime(2023, 10, delta) for delta in range(1, range_threshold)]
    )
    x_ranges = np.array(range(1, range_threshold))
    y_ranges = np.array(range(1, range_threshold))

    # ax.fill("time", "signal",
    # data={"time": x_ranges, "signal": y_ranges})
    ax.semilogy(x_dates, y_dates, "b", nonpositive='mask')
    plt.show()

# def test_fill():
#     mpl.rcParams["date.converter"] = "concise"
#     fig, ax = plt.subplots()
#     range_threshold = 10

#     x_dates = np.array([datetime.datetime(2023, 10, delta) for delta in range(1, range_threshold)])
#     y_dates = np.array([datetime.datetime(2023, 10, delta) for delta in range(1, range_threshold)])
#     x_ranges = np.array(range(1, range_threshold))
#     y_ranges = np.array(range(1, range_threshold))

#     # ax.fill(x_dates, y_dates, "b")
#     ax.fill("time", "signal",
#         data={"time": [0, 1, 2], "signal": [0, 1, 0]})
#     plt.show()

def why():
    mpl.rcParams["date.converter"] = "concise"
    limit = 5
    fig, (ax1, ax2, ax3, ax4) = plt.subplots(4, 1, layout="constrained")

    start_date = datetime.date(2023, 1, 1)
    date_x = [start_date + datetime.timedelta(days=i) for i in range(1, limit)]
    date_y = [start_date + datetime.timedelta(days=i) for i in range(1, limit)]
    x_ranges = np.array(range(1, limit))
    y_ranges = np.array(range(1, limit))

    ax1.step(x_ranges, date_y, 'g', where='pre', label='pre')
    ax2.step(date_x, y_ranges, 'b', where='mid', label='mid')
    ax3.step(date_x, date_y, 'r', where='post', label='post')
    ax4.step("date", "signal",
            data={"date": date_x, "signal": y_ranges},
            where='mid', label='mid')
    

    # Show the plot
    plt.show()

def test_error():
    mpl.rcParams["date.converter"] = "concise" 
    fig, (ax1, ax2, ax3, ax4) = plt.subplots(4, 1, layout="constrained")
    limit = 7
    
    start_date = datetime.datetime(2023, 1, 1)
    # x_dates =  np.arange(start_date, start_date+datetime.timedelta(weeks=1), datetime.timedelta(days=1))
    # y_dates = np.arange(start_date, start_date+datetime.timedelta(weeks=1), datetime.timedelta(days=1))
    x_dates = np.array([datetime.datetime(2023, 10, delta) for delta in range(1, limit)])
    y_dates = np.array([datetime.datetime(2023, 10, delta) for delta in range(1, limit)])
    # x_date_error = [i * 0.1 for i in range(1, limit)]
    # y_date_error = [i * 0.1 for i in range(1, limit)]
    # x_date_error = np.array([datetime.timedelta(days=i) for i in range(1, limit)])
    # y_date_error = np.array([datetime.timedelta(days=i) for i in range(1, limit)])
    x_date_error = datetime.timedelta(days=1)
    y_date_error = datetime.timedelta(days=1)
    x_values = list(range(1, limit))
    y_values = list(range(1, limit))
    x_value_error = 0.5
    y_value_error = 0.5

    ax1.errorbar(x_dates, y_values, 
                 yerr=y_value_error,
                 capsize=10,
                 barsabove=True, 
                 label='Data')
    
    ax2.errorbar(x_values, y_dates, 
                 xerr=x_value_error, yerr=y_date_error,
                 errorevery=(1, 2),
                 fmt='-o', label='Data')
    
    ax3.errorbar(x_dates, y_dates, 
                 xerr=x_date_error, yerr=y_date_error,
                 lolims=True, xlolims=True,
                 label='Data')
    
    ax4.errorbar(x_dates, y_values, 
                 xerr=x_date_error, yerr=y_value_error,
                 uplims=True, xuplims=True,
                 label='Data')

    plt.show()



def main():
    #test_text()
    # test_fill()
#    why()
    # test_stem()
    test_error()

if __name__ == "__main__":
    main()
